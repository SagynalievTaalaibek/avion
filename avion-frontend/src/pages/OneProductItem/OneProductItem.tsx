import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import { selectOneProduct } from '../Products/productSlice';
import { useEffect, useState } from 'react';
import { fetchOneProduct } from '../Products/productThunks';
import Container from '@mui/material/Container';
import { addOrUpdateCard } from '../Cards/cardsSlice';

const OneProductItem = () => {
  const product = useAppSelector(selectOneProduct);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };
  const [quality, setQuality] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(fetchOneProduct(id));
    }
  }, [dispatch, id]);

  const onAddToCard = () => {
    if (product) {
      dispatch(
        addOrUpdateCard({
          id: product.id,
          title: product.title,
          description: product.description,
          price: product.price,
          quantity: quality.toString(),
          image: product.image,
        }),
      );

      navigate('/cards');
    }
  };

  return (
    <section className="product-info">
      {product && (
        <Container maxWidth={'xl'}>
          <div className="product-info__content">
            <div className="product-info__image">
              <img
                src={product.image}
                aria-hidden="true"
                width="607"
                height="661"
                alt={product.title}
              />
            </div>
            <div className="product-info__text">
              <div className="product-info__top">
                <h1 className="product-info__title">{product.title}</h1>
                <div className="product-info__price">{product.price}</div>
              </div>
              <div className="product-info__item">
                <h2 className="product-info__subtitle">Product description</h2>
                <p className="product-info__descr">{product.description}</p>
              </div>
              <div className="product-info__item">
                <h2 className="product-info__subtitle">Dimensions</h2>
                <dl className="product-info__chars">
                  <div className="product-info__chars-item">
                    <dt className="product-info__chars-caption">Height</dt>
                    <dd className="product-info__chars-text">
                      {product.height}
                    </dd>
                  </div>
                  <div className="product-info__chars-item">
                    <dt className="product-info__chars-caption">Width</dt>
                    <dd className="product-info__chars-text">
                      {product.width}
                    </dd>
                  </div>
                  <div className="product-info__chars-item">
                    <dt className="product-info__chars-caption">Depth</dt>
                    <dd className="product-info__chars-text">
                      {product.depth}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="product-info__item">
                <h2 className="product-info__subtitle">Quantity</h2>
                <div className="stepper">
                  <button
                    className="btn-reset stepper__btn stepper__btn--minus"
                    aria-label="Decrease quantity"
                    disabled
                  >
                    -
                  </button>
                  <p>{quality}</p>
                  <button
                    className="btn-reset stepper__btn stepper__btn--plus"
                    aria-label="Increase quantity"
                    onClick={() => setQuality(quality + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="product-info__btns">
                <button className="btn btn--theme-darker" onClick={onAddToCard}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Container>
      )}
    </section>
  );
};

export default OneProductItem;
