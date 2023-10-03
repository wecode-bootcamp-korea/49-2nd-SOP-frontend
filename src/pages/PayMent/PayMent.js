import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';
import './PayMent.scss';

const PayMent = () => {
  const [mockdata, setMockData] = useState([]);
  const [productDetail, setProductDetail] = useState(false);

  useEffect(() => {
    fetch('/data/payMentData.json')
      .then(res => res.json())
      .then(data => {
        setMockData(data);
      });
  }, []);
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };
  const handleProductDetail = () => {
    setProductDetail(!productDetail);
  };

  // 맵으로 돌린 부분보다 윗부분에서 총합 금액 구하는식인데
  // for (const product of mockdata) 에서 product가 의미하는것은
  // mockdata의 배열의 첫번째 요소가 product라는 변수안에 할당된다는것이다
  const totalPrice = () => {
    let totalCost = 0;
    for (const product of mockdata) {
      totalCost += product.price * product.quantity;
    }
    return totalCost;
  };
  return (
    <div className="payMent">
      <div className="logoWrapper">
        <img
          className="esopLogo"
          src="/images/2sop.png"
          alt="2sop로고"
          onClick={goToMain}
        />
      </div>
      {/* 이솝로고 제외 주문내역 */}
      <div className="mockdataContainer">
        <div className="orderList">
          {/* 첫재쭐 감싼애 토글 */}
          <div>
            {/* 첫재쭐 */}
            <div className="orderListHandler" onClick={handleProductDetail}>
              <span className="orderListLetter">주문 내역</span>
              <span className="totalPriceLetter">
                ₩{totalPrice().toLocaleString()}
              </span>
              {!productDetail ? <HiChevronDown /> : <HiChevronUp />}
            </div>
          </div>
          {/* 두쨰줄 부터 세제쭐감싼애 */}
          {!productDetail ? (
            ''
          ) : (
            <div>
              {/* 두쨰줄 */}
              <div className="priceDetailWrapper">
                <dl>
                  <div className="priceDetailLetterWrapper">
                    <span>소계 (세금 포함)</span>
                    <span>₩{totalPrice().toLocaleString()}</span>
                  </div>
                  <div className="priceDetailLetterWrapper">
                    <span>배송</span>
                    <span>₩0</span>
                  </div>
                  <div className="priceDetailLetterWrapper">
                    <span>포함된세금</span>
                    <span>₩0</span>
                  </div>
                  <div className="priceDetailLetterWrapper">
                    <span>합계</span>
                    <span>₩{totalPrice().toLocaleString()}</span>
                  </div>
                </dl>
              </div>
              <div className="productDetailContainer">
                <div>
                  {mockdata.map(product => {
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
            </div>
          )}
        </div>
      </div>

      <div className="orderAddressWrapper">
        <form>
          <div className="whereYouSendLetter">
            <p>주문을 어디로 보내시겠습니까?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayMent;
