import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import StartScreen from './components/StartScreen';
import Brand from './components/Brand';
import ProductItem from '../../components/ProductItem/ProductItem';
import NewLetter from './components/NewLetter';
import AboutBlock from './components/AboutBlock';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectProducts } from '../Products/productSlice';
import { fetchProducts } from '../Products/productThunks';

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts('0'));
  }, [dispatch]);

  return (
    <>
      <StartScreen />
      <Brand />

      <Container maxWidth={'xl'}>
        <h2 className="title title--large title--mb-small products__title">
          Наши популярные продукты
        </h2>
        <ProductItem products={products} />

        <div className="centered">
          <Link to={'/product'} className="btn btn--theme-light products__btn">
            Посмотреть коллекцию
          </Link>
        </div>
      </Container>
      <NewLetter />
      <AboutBlock />
    </>
  );
};

export default Home;
