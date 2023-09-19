import NavButton from '../NavButton/NavButton';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div>
        <NavButton to="/hair">헤어</NavButton>
        <NavButton to="/perfume">향수</NavButton>
      </div>
      <div>
        <NavButton to="/login">로그인</NavButton>
        <NavButton to="/cart">카트</NavButton>
      </div>
    </div>
  );
};

export default Header;
