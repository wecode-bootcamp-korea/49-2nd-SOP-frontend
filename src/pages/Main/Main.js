import HeroBanner from '../../components/Main/HeroBanner/HeroBanner';
import Product from '../../components/Main/Product/Product';
import React, { useEffect, useState } from 'react';
import './Main.scss';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/data/mainMockData.json')
      .then(response => response.json())
      .then(result => setData(result));
  }, []);

  if (data.length === 0) {
    return;
  }

  return (
    <div className="main">
      <HeroBanner />

      <div className="productSlider">
        {data.map(info => {
          return <Product key={info.id} info={info} />;
        })}
      </div>
    </div>
  );
};

export default Main;
