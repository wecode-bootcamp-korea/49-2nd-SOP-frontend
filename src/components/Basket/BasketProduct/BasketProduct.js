import SelectQuantity from '../../SelectQuantity/SelectQuantity';
import React, { useState } from 'react';
import './BasketProduct.scss';

const BasketProduct = ({ productInfo }) => {
  const { productName, productImage, size, quantity, price } = productInfo;
  const [selectQuantity, setSelectQuantity] = useState(quantity);

  const handleQuantity = event => {
    setSelectQuantity(Number(event.target.value));
  };

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
        <SelectQuantity
          handleQuantity={handleQuantity}
          selectQuantity={selectQuantity}
        />
        <div>₩{(price * selectQuantity).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default BasketProduct;
