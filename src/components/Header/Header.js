import NavButton from '../NavButton/NavButton';
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div>
        <NavButton to="/">홈</NavButton>
        <NavButton to="/hair">헤어</NavButton>
        <NavButton to="/perfume">향수</NavButton>
      </div>
      <div>
        <NavButton to="/login">로그인</NavButton>
        <NavButton to="/cart">카트</NavButton>
      </div>
    </header>
  );
};

export default Header;
