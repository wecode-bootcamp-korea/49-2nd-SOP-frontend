import React, { useEffect, useState } from 'react';
import './Hair.scss';
import Itembox from '../../components/Itembox/Itembox';

const Hair = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('/data/detailData.json')
      .then(response => response.json())
      .then(data => {
        setItemList(data.data);
      });
  }, []);

  return (
    <div className="hairPage">
      <div className="hairTop">
        <img className="esopLogo" src="/images/2sop.png" alt="이솝로고" />
        <h1 className="hairTopName">샴푸</h1>
      </div>
      <div className="hairMiddle">
        <div className="hairText">
          <div className="hairBoldText">두피가 건강해야 모발이 건강합니다</div>

          <div className="hairMediumText">
            부드러우면서 효과적인 세정은 두피를 시작으로 두피 주변의 피부와
            머리카락을 관리합니다. 매일 머리를 감는 것보다는 필요에 따라
            세정하는 것이 바람직합니다.
          </div>
        </div>
        {itemList.map(tab => (
          <Itembox
            key={tab.id}
            id={tab.id}
            itemOptions={tab.options}
            itemName={tab.name}
            itemType={tab.suited_to}
            itemAroma={tab.aroma}
          />
        ))}
      </div>
    </div>
  );
};

export default Hair;
