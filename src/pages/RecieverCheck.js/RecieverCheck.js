import React from 'react';
import './RecieverCheck.scss';
import { useState, useEffect } from 'react';
import CheckBox from '../../components/CheckBox/CheckBox';

const RecieverCheck = () => {
  const [productData, setProductData] = useState([]);
  const [recieverData, setRecieverData] = useState({});
  const [paymentCheck, setPayMentCheck] = useState(false);

  useEffect(() => {
    fetch('/data/recieverCheckData.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data.data);
        setRecieverData(data.recieverData);
      });
  }, []);

  const handlePay = () => {
    fetch('http://10.58.52.240:8000/users/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: '토큰',
      },
      body: JSON.stringify({
        totalPrice: totalPrice(),
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'USER_CREATED') {
        }
      });
  };

  const totalPrice = () => {
    let totalCost = 0;
    for (const product of productData) {
      totalCost += product.price * product.quantity;
    }
    return totalCost;
  };
  return (
    <div className="recieverCheck">
      <div className="logoWrapper">
        <img className="esopLogo" src="/images/2sop.png" alt="2sop로고" />
      </div>
      <div className="deliveryContainer">
        <div className="deliveryInf">
          <div>
            <div className="deliveryInfLetterWrapper">
              <span className="deliverInfLetter">배송 정보</span>
            </div>
          </div>
          <div>
            {/* 두쨰줄 */}
            <div className="priceDetailWrapper">
              <dl>
                <div className="priceDetailLetterWrapper">
                  <span>{recieverData.firstName}</span>
                  <span>{recieverData.lastName}</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>{recieverData.address}</span>
                  <span>{recieverData.detailAddress}</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>{recieverData.phoneNumber}</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>무료 배송</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>0₩</span>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="productContainer">
        <div className="orderList">
          <div>
            <div className="orderListInfLetterWrapper">
              <span className="orderLetter">주문 확인</span>
            </div>
          </div>
          <div>
            <div className="productDetailContainer">
              <div>
                {productData.map(product => {
                  const {
                    cartId,
                    productName,
                    productImage,
                    size,
                    price,
                    quantity,
                  } = product;
                  return (
                    <div className="productDetailWrapper" key={cartId}>
                      <div className="imgWrapper">
                        <img
                          className="productImg"
                          src={productImage}
                          alt="상품이미지"
                        />
                      </div>
                      <div className="productDetailLetter">
                        <div className="upSideDetail">
                          <span>{productName}</span>
                          <div className="quantityWrapper">
                            <span>{quantity}개</span>
                          </div>
                        </div>

                        <div className="middleSideDetail">
                          <span>{size}</span>
                          <span>₩{(price * quantity).toLocaleString()}</span>
                        </div>
                        <div className="downSideDetail">
                          <span>
                            {price.toLocaleString()}*{quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="priceDetailWrapper">
              <dl>
                <div className="priceDetailLetterWrapper">
                  <span>소계 (세금 포함)</span>
                  <span>₩{totalPrice().toLocaleString()}</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>배송 방법 - 무료 배송</span>
                  <span>₩0</span>
                </div>
                <div className="priceDetailLetterWrapper">
                  <span>포함된세금</span>
                  <span>₩0</span>
                </div>
              </dl>
              <div className="priceDetailLetterWrapper">
                <span>합계</span>
                <span>₩{totalPrice().toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="underInformationWrapper">
        <div className="checkBoxWrapper">
          <CheckBox checked={paymentCheck} onChange={setPayMentCheck}>
            주문 내역(상품, 가격, 할인, 배송정보)을 확인하였으며, 이에
            동의합니다(전자상거래법 제8조 제2항) (필수)
          </CheckBox>
        </div>
        <div className="cancleLetter">
          <p>
            만 19세 미만 미성년자의 경우, 미성년자 본인 또는 법정대리인이 본
            구매 계약을 취소 할 수 있습니다.
          </p>
        </div>
        <div className="buttonWrapper">
          <button className="goTocomplitePay" onClick={handlePay}>
            구매 완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecieverCheck;
