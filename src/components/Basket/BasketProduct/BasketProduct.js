import React from 'react';
import './BasketProduct.scss';

const BasketProduct = ({ productInfo }) => {
  const { productName, productImage, quantity, size, price } = productInfo;

  return (
    <div className="BasketProduct">
      <img
        src={`${productImage}`}
        alt="productImage"
        className="productImage"
      />
      <div>
        <div>{productName}</div>
        <div>
          <div>{size}</div>
        </div>
      </div>
      <div>
        <div>{quantity}</div>
        <div>₩{(price * quantity).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default BasketProduct;
