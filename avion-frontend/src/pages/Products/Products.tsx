import Container from '@mui/material/Container';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectCategory } from '../Category/categorySlice';
import { fetchAllCategory } from '../Category/categoryThunks';
import { selectProducts } from './productSlice';
import ProductItem from '../../components/ProductItem/ProductItem';
import { fetchProducts } from './productThunks';

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategory);
  const [chooseCategory, setChooseCategory] = React.useState('All products');

  const onChooseCategoryChange = async (id: string, category: string) => {
    dispatch(fetchProducts(id));
    setChooseCategory(category);
  };

  useEffect(() => {
    dispatch(fetchAllCategory());
    dispatch(fetchProducts('0'));
  }, [dispatch]);

  return (
    <>
      <section className="inner-hero inner-hero--all">
        <Container maxWidth={'xl'}>
          <div className="inner-hero__content">
            <h1 className="inner-hero__title">{chooseCategory}</h1>
          </div>
        </Container>
      </section>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__btns">
          <div className="catalog__container container">
            <button
              className="catalog__btn btn-reset"
              type="button"
              data-filter="all"
              onClick={() => onChooseCategoryChange('0', 'All products')}
            >
              All products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className="catalog__btn btn-reset"
                type="button"
                onClick={() =>
                  onChooseCategoryChange(category.id, category.name)
                }
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>
      <Container maxWidth={'xl'} sx={{ mb: 3 }}>
        <ProductItem products={products} />
      </Container>
    </>
  );
};

export default Products;
