import React from 'react';
import './Hair.scss';

const Hair = () => {
  return (
    <div className="HairPage">
      <div className="HairTop">
        <img className="esopLogo" src="/images/atom.png" alt="이솝로고" />
        <h1 className="HairTopName">샴푸</h1>
      </div>
      <div className="HairMiddle">
        <div className="box">가나다</div>
        <div className="box">가나다</div>
        <div className="box">가나다</div>
        <div className="box">가나다</div>
        <div className="box">가나다</div>
        <div className="box">가나다</div>
      </div>
    </div>
  );
};

export default Hair;
