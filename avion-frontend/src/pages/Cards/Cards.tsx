import Container from '@mui/material/Container';
import { CardsI } from '../../types';
import { useAppDispatch, useAppSelector } from '../../app/store/hooks';
import {
  decrementCardQuantity,
  incrementCardQuantity,
  selectCards,
} from './cardsSlice';

const Cards = () => {
  const dispatch = useAppDispatch();
  const cards: CardsI[] = useAppSelector(selectCards);

  const onOrder = () => {
    console.log(cards);
  };

  return (
    <section className="cart">
      <Container maxWidth="xl">
        <h1 className="visually-hidden cart__main-title">Ваша Корзина</h1>
        <div className="cart__content">
          <div className="cart__table">
            <div className="cart__row cart__row--heading cart-grid">
              <div className="cart__col">Продукт</div>
              <div className="cart__col cart__col--quantity">Количество</div>
              <div className="cart__col cart__col--total">Общий</div>
            </div>
            {cards.map((product) => (
              <div key={product.id} className="cart__row cart-grid">
                <div className="cart__col cart__col--image">
                  <img
                    src={product.image}
                    aria-hidden="true"
                    width="109"
                    height="134"
                    alt={product.title}
                    className="cart__image"
                  />
                </div>
                <div className="cart__col cart__col--info">
                  <div className="cart__info">
                    <h2 className="cart__title">{product.title}</h2>
                    <p className="cart__descr">{product.description}</p>
                    <span className="cart__price">£{product.price}</span>
                  </div>
                </div>
                <div className="cart__col cart__col--quantity">
                  <div className="cart__stepper">
                    <div className="stepper stepper--cart">
                      <button
                        className="btn-reset stepper__btn stepper__btn--minus"
                        aria-label="Decrease quantity"
                        onClick={() => decrementCardQuantity(product.id)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="105"
                        value={product.quantity}
                        className="stepper__input"
                      />
                      <button
                        className="btn-reset stepper__btn stepper__btn--plus"
                        aria-label="Increase quantity"
                        onClick={() =>
                          dispatch(incrementCardQuantity(product.id))
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="cart__col cart__col--total">
                  <span className="cart__total">
                    £{parseFloat(product.price) * parseFloat(product.quantity)}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom-info">
              <span className="cart__text">
                Taxes and shipping are calculated at&nbsp;checkout
              </span>
              <div className="cart__subtotal">
                Subtotal{' '}
                <span className="cart__subtotal-price">
                  £
                  {cards.reduce(
                    (total, product) =>
                      total +
                      parseFloat(product.price) * parseFloat(product.quantity),
                    0,
                  )}
                </span>
              </div>
            </div>
            <div className="cart__btn-wrap">
              <button
                className="cart__link btn btn--theme-darker"
                onClick={onOrder}
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cards;
