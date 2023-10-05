import React from 'react';
import './BasketHeader.scss';

const BasketHeader = ({ totalPrice }) => {
  return (
    <div className="basketHeader">
      <div className="totalPrice">
        <div>주문 내역</div>
        <div>{`₩${totalPrice}`}</div>
      </div>
      <div className="basketDetail">
        <div>소계(세금 포함)</div>
        <div>{`₩${totalPrice}`}</div>
        <div>배송</div>
        <div>₩0</div>
        <div>포함된 세금</div>
        <div>₩0</div>
        <div>합계</div>
        <div>{`₩${totalPrice}`}</div>
      </div>
    </div>
  );
};

export default BasketHeader;
