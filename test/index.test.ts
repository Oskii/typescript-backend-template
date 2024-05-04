import { describe, it, expect } from 'vitest';
import { getHello } from '../src/controllers';
import { Request, Response } from 'express';

describe('getHello', () => {
    it('should respond with "Hello, world!"', () => {
        const req = {} as Request;
        const res = {
            json: (output: unknown) => {
                expect(output).toEqual({ message: 'Hello, world!' });
            },
        } as Response;

        getHello(req, res);
    });
});
