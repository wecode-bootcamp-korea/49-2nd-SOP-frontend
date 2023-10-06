import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HOST } from '../../components/Variable';
import './ProductDetail.scss';

const ProductDetail = () => {
  const [itemDetail, setItemDetail] = useState({});
  const [itemModal, setItemModal] = useState(false);
  const [radioButton, setRadioButton] = useState(1);
  const [priceButton, setPriceButton] = useState(0);

  const params = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/hair`);
  };

  const handleRadioButton = (id, index) => {
    setRadioButton(id);
    setPriceButton(index);
  };

  useEffect(() => {
    fetch(`${HOST}/product/hair/hair/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        // authorization: localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(data => {
        setItemDetail(data.data);
      });
  }, []);

  const handleCartItem = productId => {
    fetch(`http://${HOST}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productId: productId - 3,
        quantity: 1,
      }),
    }) //요청
      .then(response => response.json())
      .then(data => {});
  };

  const isEmpty = Object.keys(itemDetail).length > 0;
  if (!isEmpty) return null;

  return (
    <div className="productPage">
      {itemModal === true && (
        <div className="productModalBox">
          {itemDetail.product_data[0].ingredients}
        </div>
      )}

      <div className="productPageTop">
        <div className="productLeft">
          <img
            className="productImg"
            src={`${itemDetail.product_size_data[0].product_image}`}
            alt="이솝상품"
          />
        </div>
        <div className="productRight">
          <div className="productCategory" onClick={handleClick}>
            헤어
          </div>
          <h1 className="productName">{itemDetail.product_data[0].name}</h1>
          <div className="productParagraph">
            {itemDetail.product_data[0].description}
          </div>
          {itemDetail.product_size_data &&
          itemDetail.product_size_data.length === 1 ? (
            <div className="detailSizeName">{itemDetail.size}</div>
          ) : (
            itemDetail.product_size_data &&
            itemDetail.product_size_data.map((b, idx) => (
              <div className="detailSizeName" key={b}>
                <input
                  className="itemRadio"
                  type="radio"
                  value={b}
                  onChange={() => handleRadioButton(b.product_size, idx)}
                  checked={radioButton === b.product_size}
                />
                <div className="itemRadioParagraph">{b.product_size}ML </div>
              </div>
            ))
          )}

          {itemDetail.product_size_data &&
          itemDetail.product_size_data.length === 1 ? (
            itemDetail.product_size_data &&
            itemDetail.product_size_data.map(a => (
              <div className="DetailPriceList" key={a.id}>
                ₩{a.price}
              </div>
            ))
          ) : (
            <div className="DetailPriceList" key={itemDetail.id}>
              ₩{itemDetail.product_size_data[priceButton].price}
            </div>
          )}
          <button
            className="productCartButton"
            onClick={() =>
              handleCartItem(
                itemDetail.product_size_data.length === 1
                  ? itemDetail.product_size_data[0].id
                  : itemDetail.product_size_data[priceButton].id,
              )
            }
          >
            카트에 추가하기
          </button>
          <div className="hairType">헤어타입 </div>
          <div className="hairParagraph">
            {itemDetail.product_data[0].suited_to}
          </div>
          <div className="aromaType">향 </div>
          <div className="aromaParagraph">
            {itemDetail.product_data[0].aroma}
          </div>
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
          <div className="productInfTableBoxWhite ">상품 상세설명 참조</div>
          <div className="productInfTableBoxBlack ">
            사용기한 또는 개봉 후 사용기간
          </div>
          <div className="productInfTableBoxWhite ">
            개봉전 유효기간이 12개월 이상 남아있는 제품으로 배송. 제조번호 및
            제조일자: 용기별도표시예, 30C0523A2023년 05월30일제조. 개봉후
            사용기간: 별도심벌참조. 개봉전 유효기간: 제조일로부터 36개월
          </div>
          <div className="productInfTableBoxBlack ">
            화장품제조업자 및 화장품책임판매업자
          </div>
          <div className="productInfTableBoxWhite ">
            Emeis Cosmetics Pty. Ltd / 이솝코리아 유한회사
          </div>
          <div className="productInfTableBoxBlack ">제조국</div>
          <div className="productInfTableBoxWhite ">호주</div>
          <div className="productInfTableBoxBlack ">사용할 때의 주의사항</div>
          <div className="productInfTableBoxWhite ">
            개봉전 유효기간이 12개월 이상 남아있는 제품으로 배송. 제조번호 및
            제조일자: 용기별도표시예, 30C0523A2023년 05월30일제조. 개봉후
            사용기간: 별도심벌참조. 개봉전 유효기간: 제조일로부터 36개월
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
