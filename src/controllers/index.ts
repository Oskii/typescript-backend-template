import { Request, Response } from 'express';
import pool from '../db';

export async function getHello(req: Request, res: Response): Promise<void> {
    try {
        const result = await pool.query('SELECT $1::text as message', ['Hello, world!']);
        res.json({ message: result.rows[0].message });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
