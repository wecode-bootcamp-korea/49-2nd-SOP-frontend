import BasketHeader from '../../components/Basket/BasketHeader/BasketHeader';
import BasketProduct from '../../components/Basket/BasketProduct/BasketProduct';
import React, { useEffect, useState } from 'react';
import './Basket.scss';

const Basket = () => {
  const [basketList, setBasketList] = useState([]);

  useEffect(() => {
    fetch('/data/basketMockData.json')
      .then(response => response.json())
      .then(result => setBasketList(result));
  }, []);

  const totalPrice = basketList
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toLocaleString();

  if (basketList.length === 0) {
    return null;
  }

  return (
    <div className="basket">
      <div className="basketContainer">
        <img src="/images/2sop.png" alt="logo" className="logo" />
        <BasketHeader totalPrice={totalPrice} />
        <div>
          {basketList.map((productInfo, index) => {
            return <BasketProduct key={index} productInfo={productInfo} />;
          })}
        </div>
      </div>
      <button className="payment">결제하러 가기</button>
    </div>
  );
};

export default Basket;
