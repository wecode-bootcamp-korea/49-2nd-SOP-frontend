import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Itembox.scss';

const Itembox = ({ id, itemOptions, itemName, itemType, itemAroma }) => {
  const [radioButton, setRadioButton] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [userCartItem, setuserCartItem] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/backData.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product_Id: userCartItem,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {});
  }, []);

  const handleRadioButton = id => {
    setRadioButton(id);
  };

  const handleUserCart = id => {
    setuserCartItem(id);
  };

  const handleClick = () => {
    navigate(`/hair/${id}`);
  };

  useEffect(() => {}, []);
  return (
    <div
      className="itemList"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="itemImg"
        src={itemOptions[0].img_url}
        alt="이솝"
        onClick={handleClick}
      />
      <div className="itemName">{itemName}</div>
      <div className="itemSelect">
        {itemOptions.length === 1 || isHovered === true
          ? ''
          : `${
              itemOptions.length
            }사이즈 / ₩${itemOptions[0].price.toLocaleString()}원 부터`}
        {itemOptions.map(a =>
          itemOptions.length === 1 ? (
            <div className="sizeList" key={a.id}>
              {a.size}
            </div>
          ) : (
            isHovered === true && (
              <div className="itemBtn" key={a.id}>
                <input
                  className="itemRadio"
                  type="radio"
                  value={a.id}
                  onChange={() => handleRadioButton(a.id)}
                  checked={radioButton === a.id}
                />
                <div className="itemRadioParagraph">{a.size} </div>
              </div>
            )
          ),
        )}
      </div>
      <div className="itemPrice">
        {itemOptions.length === 1
          ? itemOptions.map(a => (
              <div className="priceList" key={a.id}>
                ₩{a.price.toLocaleString()}
              </div>
            ))
          : isHovered === true && (
              <div className="priceList" key={itemOptions[radioButton - 1].id}>
                ₩{itemOptions[radioButton - 1].price.toLocaleString()}
              </div>
            )}
      </div>
      <div className="itemMiddle">
        <div className="hairType">
          <div className="hairString">헤어타입</div>
          <div className="itemType">{itemType}</div>
        </div>
        <div className="aromaType">
          <div className="aromaString">향</div>
          <div className="itemAroma">{itemAroma}</div>
        </div>

        <div
          className={isHovered === true ? 'itemCartBlack' : 'itemCart'}
          onClick={
            itemOptions.length === 1
              ? () => {
                  handleUserCart(itemOptions[0].id);
                }
              : () => {
                  handleUserCart(radioButton);
                }
          }
        >
          {isHovered === true ? '카트에 추가하기' : ''}
        </div>
      </div>
    </div>
  );
};

export default Itembox;
