import React, { useState, useEffect } from 'react';
import { HOST } from '../../components/Variable';
import './PayMentCheck.scss';

const PayMentCheck = () => {
  const [orderId, setOrderId] = useState([]);

  useEffect(() => {
    fetch('/data/payMentCheck.json')
      .then(response => response.json())
      .then(data => {
        setOrderId(data.data);
      });
  }, []);

  return (
    <div className="payMentCheck">
      <div className="detailWrapper">
        <div className="logoWrapper">
          <img className="esopLogo" src="/images/2sop.png" alt="2sop로고" />
        </div>
        <dl>
          <div className="firstLine">
            <h1>감사합니다 </h1> <span>주문이 완료되었습니다</span>
          </div>
          <div className="secondLine">
            <span>주문번호 : </span>
            <span> {orderId.orderId}</span>
          </div>
          <div className="thirdLine">
            <span>잔여포인트 : </span>
            <span>{orderId.remainingPoints.toLocaleString()}</span>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default PayMentCheck;
