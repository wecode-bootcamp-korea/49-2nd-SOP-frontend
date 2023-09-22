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
        console.log(data);
        console.log(data.data);
      });
  }, []);

  return (
    <div className="HairPage">
      <div className="HairTop">
        <img className="esopLogo" src="/images/2sop.png" alt="이솝로고" />
        <h1 className="HairTopName">샴푸</h1>
      </div>
      <div className="HairMiddle">
        {itemList.map(tab => (
          <Itembox
            id={tab.id}
            itemimg={tab.options[0].img_url}
            itemname={tab.name}
            itemtype={tab.suited_to}
            itemaroma={tab.aroma}
            itemprice={tab.price}
          ></Itembox>
        ))}
      </div>
    </div>
  );
};

export default Hair;
