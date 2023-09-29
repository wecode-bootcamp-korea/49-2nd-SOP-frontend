import React from 'react';
import './Button.scss';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`remote ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
