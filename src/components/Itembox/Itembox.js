import react from 'react';
import { useNavigate } from 'react-router-dom';
import './Itembox.scss';

const Itembox = props => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detailPage/${props.id}`);
  };
  return (
    <div className="itemList" onClick={handleClick}>
      <img className="itemImg" src={props.itemimg} />
      <div className="itemName">{props.itemname}</div>
      <div className="itemMiddle">
        <div className="hairType">
          <div className="hairString">헤어타입</div>
          <div className="itemType">{props.itemtype}</div>
        </div>
        <div className="aromaType">
          <div className="aromaString">향</div>
          <div className="itemAroma">{props.itemaroma}</div>
        </div>

        <div className="itemPrice">{props.itemprice}</div>
      </div>
    </div>
  );
};

export default Itembox;
