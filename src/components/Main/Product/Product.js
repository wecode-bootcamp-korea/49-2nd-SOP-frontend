import React from 'react';
import './Product.scss';
import { useNavigate } from 'react-router-dom';

const Product = ({ info }) => {
  const navigate = useNavigate();
  const { ID, productCategory, PRODUCT_IMAGE, name, description } = info;

  const handleGoToDetail = () => {
    navigate(`/${productCategory.toLowerCase()}/${ID}`);
  };

  return (
    <div className="product" onClick={handleGoToDetail}>
      <img src={PRODUCT_IMAGE} alt="porductImage" />
      <div className="productName">{name}</div>
      <div className="aroma">{description}</div>
    </div>
  );
};

export default Product;
