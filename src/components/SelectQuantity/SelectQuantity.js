import { quantityArray } from '../Variable';
import React from 'react';
import './SelectQuantity.scss';

const SelectQuantity = ({ handleQuantity }) => {
  return (
    <select onChange={handleQuantity}>
      {quantityArray.map(value => {
        return <option key={value}>{value}</option>;
      })}
    </select>
  );
};

export default SelectQuantity;
