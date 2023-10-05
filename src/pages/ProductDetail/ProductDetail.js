import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [itemModal, setItemModal] = useState(false);
  const [radioButton, setRadioButton] = useState(1);
  const [priceButton, setPriceButton] = useState(0);
  const [userCartItem, setuserCartItem] = useState([]);

  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/hair`);
  };
  const handleuserCartItem = id => {
    setuserCartItem(id);
  };

  const handleRadioButton = (id, index) => {
    setRadioButton(id);
    setPriceButton(index);
  };

  useEffect(() => {
    fetch(`/data/backData.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('loginToken'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setItemDetail(data.data[0]);
      });
  }, []);

  if (setItemDetail.length === 0) {
    return null;
  }

  return (
    <div className="productPage">
      {itemModal === true && <div className="productModalBox">가나다라</div>}

      <div className="productPageTop">
        <div className="productLeft">
          <img
            className="productImg"
            src={`${itemDetail.img_url && itemDetail.img_url}`}
            alt="이솝상품"
          />
        </div>
        <div className="productRight">
          <div className="productCategory" onClick={handleClick}>
            헤어
          </div>
          <h1 className="productName">{itemDetail.name}</h1>
          <div className="productParagraph">{itemDetail.description}</div>
          {itemDetail.size && itemDetail.size.length === 1 ? (
            <div className="detailSizeName">{itemDetail.size}</div>
          ) : (
            itemDetail.size &&
            itemDetail.size.map((b, idx) => (
              <div className="detailSizeName" key={b}>
                <input
                  className="itemRadio"
                  type="radio"
                  value={b}
                  onChange={() => handleRadioButton(b, idx)}
                  checked={radioButton === b}
                />
                <div className="itemRadioParagraph">{b} </div>
              </div>
            ))
          )}

          {itemDetail.price && itemDetail.price.length === 1 ? (
            itemDetail.price &&
            itemDetail.price.map(a => (
              <div className="DetailPriceList" key={a.id}>
                ₩{a}
              </div>
            ))
          ) : (
            <div className="DetailPriceList" key={itemDetail.id}>
              ₩{itemDetail.price && itemDetail.price[priceButton]}
            </div>
          )}
          <button
            className="productCartButton"
            onClick={() => handleuserCartItem(itemDetail.id)}
          >
            카트에 추가하기
          </button>
          <div className="hairType">헤어타입 </div>
          <div className="hairParagraph">{itemDetail.description}</div>
          <div className="aromaType">향 </div>
          <div className="aromaParagraph">{itemDetail.aroma}</div>
          <div className="aromaTypeButton">
            <div className="aromaIngredients">주요성분</div>
            <button
              className="aromaButton"
              onClick={() => {
                setItemModal(!itemModal);
              }}
            >
              +
            </button>
          </div>
          <div className="aromaParagraph">{itemDetail.key_ingredients}</div>
        </div>
      </div>
      <div className="productPageBottom">
        <h2 className="productInf">상품필수정보</h2>
        <div className="productInfTable">
          <div className="productInfTableBoxBlack ">제품 주요 사양</div>
          <div className="productInfTableBoxWhite ">
            {itemDetail.specification}
          </div>
          <div className="productInfTableBoxBlack ">
            사용기한 또는 개봉 후 사용기간
          </div>
          <div className="productInfTableBoxWhite ">{itemDetail.Period}</div>
          <div className="productInfTableBoxBlack ">
            화장품제조업자 및 화장품책임판매업자
          </div>
          <div className="productInfTableBoxWhite ">{itemDetail.company}</div>
          <div className="productInfTableBoxBlack ">제조국</div>
          <div className="productInfTableBoxWhite ">{itemDetail.Country}</div>
          <div className="productInfTableBoxBlack ">사용할 때의 주의사항</div>
          <div className="productInfTableBoxWhite ">{itemDetail.Period}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
