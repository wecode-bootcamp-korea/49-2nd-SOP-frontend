import Button from '../Button/Button';
import Product from '../Product/Product';
import React, { useState } from 'react';
import './ProductContainer.scss';

const ProductContainer = ({ productList }) => {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    if (count === 3) {
      setCount(3);
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
        style={{ transform: `translateX(${count * -360}px)` }}
      >
        {productList.map(info => {
          return <Product key={info.productId} info={info} />;
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
