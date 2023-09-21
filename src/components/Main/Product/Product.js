import React from 'react';
import './Product.scss';

const Product = ({ info }) => {
  const { productImage, productName, aroma } = info;

  return (
    <div className="product">
      <img src={productImage} alt="porductImage" />
      <div className="productName">{productName}</div>
      <div className="aroma">{aroma}</div>
    </div>
  );
};

export default Product;
