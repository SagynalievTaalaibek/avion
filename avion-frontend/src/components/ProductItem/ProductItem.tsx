import React from 'react';
import { ProductI } from '../../types';
import { Link } from 'react-router-dom';

interface Props {
  products: ProductI[];
}

const ProductItem: React.FC<Props> = ({ products }) => {
  return (
    <div className="catalog__items grid">
      {products.map((product) => (
        <article className="product" data-order="1" key={product.id}>
          <div className="product__top">
            <img
              src={product.image}
              width="305"
              height="375"
              alt=""
              className="product__image"
            />
          </div>
          <div className="product__content">
            <h3 className="product__title">
              <Link to={`/product/${product.id}`} className="product__link">
                {product.title}
              </Link>
            </h3>
            <span className="product__price">{product.price}</span>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductItem;
