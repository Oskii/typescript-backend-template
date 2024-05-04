import express from 'express';
import { getHello } from '../controllers';

export const router = express.Router();

router.get('/hello', getHello);
