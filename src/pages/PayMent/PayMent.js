import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';
import './PayMent.scss';
import Input from '../../components/Input/Input';
import { HOST } from '../../components/Variable';

const PayMent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [nation, setNation] = useState('');
  const [detailAddress, setdetailAddress] = useState('');
  const [productData, setProductData] = useState([]);
  const [userData, setUserData] = useState({});
  const [productDetail, setProductDetail] = useState(false);

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const goToRecieverCheck = () => {
    navigate('/recieverCheck');
  };
  const handleProductDetail = () => {
    setProductDetail(!productDetail);
  };

  const saveReceiverFirstName = e => {
    setFirstName(e.target.value);
  };

  const saveReceiverLastName = e => {
    setLastName(e.target.value);
  };

  const saveReceiverPhoneNumber = e => {
    setPhoneNumber(e.target.value);
  };

  const saveReceiverAddress = e => {
    setAddress(e.target.value);
  };

  const saveReceiverDetailAddress = e => {
    setdetailAddress(e.target.value);
  };

  const saveReceiverNation = e => {
    setNation(e.target.value);
  };

  const handlePayMent = event => {
    event.preventDefault();
    if (firstName === '' || firstName.length > 2) {
      alert('성을 두글자 이내로 작성해주세요');
      return;
    } else if (lastName === '' || lastName.length > 5) {
      alert('이름을 다섯글자 이내로 작성해주세요');
      return;
    } else if (
      phoneNumber === '' ||
      !phoneNumber.includes('-') ||
      phoneNumber.length > 13
    ) {
      alert('전화번호는 (010-0000-0000) 형식으로 작성해주세요');
      return;
    } else if (address === '') {
      alert('주소를 작성해주세요');
      return;
    } else if (detailAddress === '') {
      alert('세부주소를 작성해주세요');
      return;
    } else if (nation === '') {
      alert('국가를 선택해주세요');
    }

    fetch(`${HOST}/order/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('loginToken'),
      },
      body: JSON.stringify({
        cartId: productData.cartId,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        country: nation,
        address: address,
        detailedAddress: detailAddress,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'ORDER_CREATED') {
          goToRecieverCheck();
        } else if (data.message === 'SHIPMENT_NOT_FOUND') {
          alert('');
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
    <div className="payMent">
      <div className="logoWrapper">
        <img
          className="esopLogo"
          src="/images/2sop.png"
          alt="2sop로고"
          onClick={goToMain}
        />
      </div>
      <div className="mockdataContainer">
        <div className="orderList">
          <div>
            <div className="orderListHandler" onClick={handleProductDetail}>
              <span className="orderListLetter">주문 내역</span>
              <span className="totalPriceLetter">
                ₩{totalPrice().toLocaleString()}
              </span>
              {!productDetail ? <HiChevronDown /> : <HiChevronUp />}
            </div>
          </div>
          {!productDetail ? (
            ''
          ) : (
            <div>
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
            </div>
          )}
        </div>
      </div>
      <div className="ordererInformation">
        <div>
          <div>
            <h2>주문자 정보</h2>
          </div>
          <div>
            <div>
              {userData.firstName} {userData.lastName}님
            </div>
            <div>{userData.email}</div>
          </div>
        </div>
      </div>
      <div className="sendInformationContainer">
        <form>
          <div className="whereSend">
            <h1>주문을 어디로 보내시겠습니까?</h1>
          </div>
          <div className="formInput">
            <div className="nameContainer">
              <Input
                className="firstNameInput"
                type="text"
                placeholder="성"
                value={firstName}
                onChange={saveReceiverFirstName}
              />
              <Input
                className="lastNameInput"
                type="text"
                placeholder="이름"
                value={lastName}
                onChange={saveReceiverLastName}
              />
            </div>
            <div className="phoneNumberContainer">
              <Input
                className="phoneNuberInput"
                type="tel"
                placeholder="전화번호(010-0000-0000)"
                value={phoneNumber}
                onChange={saveReceiverPhoneNumber}
              />
            </div>
            <div className="nationContainer">
              <select onChange={saveReceiverNation} value={nation}>
                <option selected>국가를 선택하세요</option>
                <option>대한민국</option>
                <option>나열되지않은 국가</option>
              </select>
            </div>
            <div className="addressContainer">
              <Input
                className="addressInput"
                type="text"
                placeholder="주소"
                value={address}
                onChange={saveReceiverAddress}
              />
            </div>
            <div className="detailAddresContainer">
              <Input
                className="detailAddressInput"
                type="text"
                placeholder="상세주소(아파트 동.호수, 일반주택 등)"
                value={detailAddress}
                onChange={saveReceiverDetailAddress}
              />
            </div>
          </div>
          <div className="buttonWrapper">
            <button onClick={handlePayMent}>결제하기로 이동</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PayMent;
