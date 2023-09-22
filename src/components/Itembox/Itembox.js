import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Itembox.scss';

const Itembox = ({
  id,
  itemoptions,
  itemname,
  itemtype,
  itemaroma,
  itemprice,
}) => {
  // const [sizeList, setsizeList] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detailPage/${id}`);
  };

  return (
    <div className="itemList" onClick={handleClick}>
      <img className="itemImg" src={itemoptions[0].img_url} alt="이솝" />
      <div className="itemName">{itemname}</div>
      {/* {props.map(a => (
        <div className="sizeList">{a.id}</div>
      ))} */}
      <div className="itemMiddle">
        <div className="hairType">
          <div className="hairString">헤어타입</div>
          <div className="itemType">{itemtype}</div>
        </div>
        <div className="aromaType">
          <div className="aromaString">향</div>
          <div className="itemAroma">{itemaroma}</div>
        </div>

        <div className="itemPrice">{itemprice}</div>
      </div>
    </div>
  );
};

export default Itembox;
