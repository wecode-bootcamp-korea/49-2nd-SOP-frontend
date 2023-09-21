import HeroBanner from '../../components/Main/HeroBanner/HeroBanner';
import ProductContainer from '../../components/Main/ProductContainer/ProductContainer';
import React, { useEffect, useState } from 'react';
import './Main.scss';

const Main = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/mainMockData.json')
      .then(response => response.json())
      .then(result => setProductList(result));
  }, []);

  if (productList.length === 0) {
    return;
  }

  return (
    <div className="main">
      <HeroBanner />
      <ProductContainer productList={productList} />
    </div>
  );
};

export default Main;
