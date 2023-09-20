import React from 'react';
import './Hair.scss';
import Itembox from '../../components/Itembox/Itembox';

const Hair = () => {
  return (
    <div className="HairPage">
      <div className="HairTop">
        <img className="esopLogo" src="/images/2sop.png" alt="이솝로고" />
        <h1 className="HairTopName">샴푸</h1>
      </div>
      <div className="HairMiddle">
        <Itembox></Itembox>
        <Itembox></Itembox>
        <Itembox></Itembox>
        <Itembox></Itembox>
        <Itembox></Itembox>
        <Itembox></Itembox>
      </div>
    </div>
  );
};

export default Hair;
