import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Itembox.scss';
import { HOST } from '../../components/Variable';

const Itembox = ({ id, itemSize, itemName }) => {
  const [radioButton, setRadioButton] = useState(1);
  const [radioIdexNumber, setradioIdexNumber] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleAddCart = productId => {
    fetch(`${HOST}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('loginToken'),
      },
      body: JSON.stringify({
        id: productId,
        productId: id,
        quantity: 1,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {});
  };

  const handleRadioButton = (id, index) => {
    setRadioButton(id);
    setradioIdexNumber(index);
  };

  const handleClick = () => {
    navigate(`/hair/${id}`);
  };

  return (
    <div
      className="itemList"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className="itemImg"
        src={itemSize[0].product_image}
        alt="이솝"
        onClick={handleClick}
      />
      <div className="itemName">{itemName}</div>
      <div className="itemSelect">
        {itemSize.length === 1 || isHovered
          ? ''
          : `${
              itemSize.length
            }사이즈 / ₩${itemSize[0].price.toLocaleString()}원 부터`}
        {itemSize.map((a, idx) =>
          itemSize.length === 1 ? (
            <div className="sizeList" key={a.id}>
              {a.product_size}
            </div>
          ) : (
            isHovered && (
              <div className="itemBtn" key={a.id}>
                <input
                  className="itemRadio"
                  type="radio"
                  value={a.id}
                  onChange={() => handleRadioButton(a.id, idx)}
                  checked={radioButton === a.id}
                />
                <div className="itemRadioParagraph">{a.product_size}ML</div>
              </div>
            )
          ),
        )}
      </div>
      <div className="itemPrice">
        {itemSize.length === 1
          ? itemSize.map(a => (
              <div className="priceList" key={a.id}>
                ₩{a.price.toLocaleString()}
              </div>
            ))
          : isHovered === true && (
              <div className="priceList" key={itemSize[radioIdexNumber].id}>
                ₩{itemSize[radioIdexNumber].price.toLocaleString()}
              </div>
            )}
      </div>
      <div className="itemMiddle">
        <div className="hairType">
          <div className="hairString">헤어타입</div>
          <div className="itemType">
            {' '}
            가는 모발, 연약한 모발, 염색 모발을 포함한 다양한 모발 타입
          </div>
        </div>
        <div className="aromaType">
          <div className="aromaString">향</div>
          <div className="itemAroma">민트, 허브</div>
        </div>

        <div
          className={isHovered ? 'itemCartBlack' : 'itemCart'}
          onClick={
            itemSize.length === 1
              ? () => {
                  handleAddCart(itemSize[0].id);
                }
              : () => {
                  handleAddCart(itemSize[radioIdexNumber].id);
                }
          }
        >
          {isHovered ? '카트에 추가하기' : ''}
        </div>
      </div>
    </div>
  );
};

export default Itembox;
