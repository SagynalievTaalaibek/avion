import express from 'express';
import pool from '../db';

const categoryRouter = express.Router();

categoryRouter.get('/', async (_req, res, next) => {
  try {
    const result = await pool.query('SELECT * FROM categories');
    return res.send(result.rows);
  } catch (e) {
    next(e);
  }
});

export default categoryRouter;
