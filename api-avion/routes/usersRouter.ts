import express from 'express';
import pool from '../db';
import bcrypt from 'bcrypt';

const userRouter = express.Router();

const findUserByEmail = async (email: string) => {
  const client = await pool.connect();
  try {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await client.query(query, [email]);
    return rows;
  } finally {
    client.release();
  }
};

const generateTokenForUser = async (userId: string) => {
  const token = crypto.randomUUID().toString();
  const client = await pool.connect();

  try {
    await pool.query('UPDATE users SET token = $1 WHERE id = $2 RETURNING *', [
      token,
      userId,
    ]);

    return token;
  } finally {
    client.release();
  }
};

userRouter.post('/', async (req, res) => {
  try {
    const { full_name, phone, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const existingUser = await findUserByEmail(email);

    if (existingUser.length) {
      return res
        .status(422)
        .send({ error: 'This user is already registered!' });
    }

    const newUser = await pool.query(
      'INSERT INTO users (full_name, phone, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
      [full_name, phone, email, hashedPassword],
    );

    // Generate token for the user
    const token = await generateTokenForUser(newUser.rows[0].id);
    return res.send({
      message: 'User created successfully!',
      user: { id: newUser.rows[0].id, email, full_name, token },
    });
  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).send('Internal Server Error');
  }
});

userRouter.post('/sessions', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await pool.query(
      'SELECT u.id, email, password, full_name, r.role_name, position_name, phone FROM users u ' +
        'LEFT JOIN public.positions p on p.id= u.position_id ' +
        'LEFT JOIN public.roles r on p.role_id = r.id WHERE email = $1',
      [email],
    );

    if (!user.rows.length) {
      return res.status(422).send({ error: 'User not found!' });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.rows[0].password,
    );
    if (!isPasswordValid) {
      return res.status(422).send({ error: 'Password is wrong!' });
    }

    const token = await generateTokenForUser(user.rows[0].employee_id);

    return res.send({
      message: 'Email and password are correct!',
      user: {
        email: user.rows[0].email,
        full_name: user.rows[0].full_name,
        token,
        role: user.rows[0].role_name,
        position_name: user.rows[0].position_name,
        phone: user.rows[0].phone,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

userRouter.delete('/sessions', async (req, res, next) => {
  try {
    const headerValue = req.get('Authorization');
    const successMessage = { message: 'Success!!' };

    if (!headerValue) {
      return res.send(successMessage);
    }

    const [_bearer, token] = headerValue.split(' ');

    if (!token) {
      return res.send(successMessage);
    }

    const user = await pool.query('SELECT * FROM users WHERE token = $1', [
      token,
    ]);

    if (!user.rows.length) {
      return res.send(successMessage);
    }

    await pool.query('UPDATE users SET token = null WHERE token = $1', [token]);
    return res.send(successMessage);
  } catch (error) {
    next(error);
  }
});

export default userRouter;
