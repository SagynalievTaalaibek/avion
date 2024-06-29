import express from 'express';
import pool from '../db';

const productRouter = express.Router();

productRouter.post('/', async (req, res, next) => {
  try {
    const {
      image,
      title,
      price,
      description,
      height,
      width,
      depth,
      quantity,
      categoryId,
    } = req.body;

    const newProduct = await pool.query(
      'INSERT INTO products (image, title, price, description, height, width, depth, quantity, categoryId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [
        image,
        title,
        price,
        description,
        height,
        width,
        depth,
        quantity,
        categoryId,
      ],
    );

    res.send(newProduct.rows[0]);
  } catch (e) {
    next(e);
  }
});

productRouter.get('/', async (req, res, next) => {
  try {
    const category = req.query.category;

    if (category !== '0') {
      const result = await pool.query(
        'SELECT p.id, p.image, p.title, p.price, p.description, p.height, p.width, p.depth, p.quantity, c.name as category_name ' +
          'FROM products p LEFT JOIN categories c ON p.categoryId = c.id ' +
          'WHERE categoryId = $1',
        [category],
      );

      res.send(result.rows);
    }

    const result = await pool.query(
      'SELECT p.id, p.image, p.title, p.price, p.description, p.height, p.width, p.depth, p.quantity, c.name as category_name ' +
        'FROM products p LEFT JOIN categories c ON p.categoryId = c.id',
    );

    res.send(result.rows);
  } catch (e) {
    next(e);
  }
});

productRouter.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      'SELECT p.id, p.image, p.title, p.price, p.description, p.height, p.width, p.depth, p.quantity, c.name as category_name ' +
        'FROM products p LEFT JOIN categories c ON p.categoryId = c.id ' +
        'WHERE p.id = $1',
      [id],
    );

    res.send(result.rows[0]);
  } catch (e) {
    next(e);
  }
});

export default productRouter;
