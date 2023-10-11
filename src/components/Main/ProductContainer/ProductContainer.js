import Button from '../Button/Button';
import Product from '../Product/Product';
import React, { useState } from 'react';
import './ProductContainer.scss';

const ProductContainer = ({ productList }) => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    if (count === productList.length - 3) {
      setCount(productList.length - 3);
    } else {
      setCount(count + 1);
    }
  };
  const handleMinus = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="productContainer">
      <div
        className="productSlider"
        style={{ transform: `translateX(${count * -350}px)` }}
      >
        {productList.map(info => {
          return <Product key={info.id} info={info} />;
        })}
      </div>
      <Button className="left" onClick={handleMinus}>
        〈
      </Button>
      <Button className="right" onClick={handlePlus}>
        〉
      </Button>
    </div>
  );
};

export default ProductContainer;
