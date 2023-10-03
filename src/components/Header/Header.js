import React, { useState } from 'react';
import NavButton from '../NavButton/NavButton';
import Login from '../../pages/Login/Login';
import './Header.scss';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalopen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <header className="header">
      <div>
        <NavButton to="/">홈</NavButton>
        <NavButton to="/hair">헤어</NavButton>
        <NavButton to="/perfume">향수</NavButton>
        <span>카트 & 트래블</span>
        <span>기프트 가드</span>
        <span>스토어</span>
      </div>
      <div>
        <div className="handleModal" onClick={handleModalopen}>
          로그인
        </div>
        <NavButton to="/cart">카트</NavButton>
      </div>
      {isModalOpen && (
        <div className="modal">
          <Login
            handleModalopen={handleModalopen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
