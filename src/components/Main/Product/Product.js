import React from 'react';
import './Product.scss';
import { useNavigate } from 'react-router-dom';

const Product = ({ info }) => {
  const navigate = useNavigate();

  const { id, img_url, name, aroma } = info;

  const handleGoToDetail = () => {
    navigate(`/detailPage/${id}`);
  };

  return (
    <div className="product" onClick={handleGoToDetail}>
      <img src={img_url} alt="porductImage" />
      <div className="productName">{name}</div>
      <div className="aroma">{aroma}</div>
    </div>
  );
};

export default Product;
