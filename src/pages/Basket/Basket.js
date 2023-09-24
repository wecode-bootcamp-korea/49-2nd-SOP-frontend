import React from 'react';
import './Basket.scss';

const Basket = () => {
  return (
    <div className="basket">
      <img src="/images/2sop.png" alt="logo" className="logo" />
      <div className="basketHeader">
        <div className="order">주문 내역</div>
        <span className="totalPrice">price</span>
      </div>
    </div>
  );
};

export default Basket;
