// import React, { useEffect, useState } from 'react';
import './DetailPage.scss';

const DetailPage = () => {
  // const [itemDetail, setItemDetail] = useState([]);
  // useEffect(() => {
  //   fetch('/data/detailData.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setItemDetail(data.data);
  //     });
  // }, []);
  return (
    <div className="productPageTop">
      <img
        className="productImg"
        src="/images/Aesop_Hair_Shampoo_500mL_Large_888x1100px.png"
        alt="이솝상품"
      />
      <div className="productRight">
        <h1 className="productName">샴푸</h1>
        <div className="productParagraph">
          프랑킨센스, 판테놀 등 뛰어난 성분을 함유하여 모발과 두피를 깨끗하게
          세정하며 부드럽고 윤기나는 머릿결과 향기로운 모발을 선사하는 샴푸
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
