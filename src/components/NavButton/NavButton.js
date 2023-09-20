import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.scss';

const NavButton = ({ to, children }) => {
  return (
    <Link className="navButton" to={to}>
      {children}
    </Link>
  );
};

export default NavButton;
