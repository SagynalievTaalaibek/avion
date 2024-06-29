import express from 'express';
import cors from 'cors';
import userRouter from './routes/usersRouter';
import categoryRouter from './routes/categoryRouter';
import productRouter from './routes/productRouter';

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`Server start on ${port} port!`);
});
