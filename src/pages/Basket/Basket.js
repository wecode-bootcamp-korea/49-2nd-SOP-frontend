import { useNavigate } from 'react-router-dom';
import BasketHeader from '../../components/Basket/BasketHeader/BasketHeader';
import BasketProduct from '../../components/Basket/BasketProduct/BasketProduct';
import { useGetList } from '../../components/Basket/BasketProduct/useGetList';
import './Basket.scss';

const Basket = () => {
  const navigate = useNavigate();
  const { list, setList } = useGetList();
  console.log(list);

  const goToPayment = () => {
    navigate('/payment');
  };

  if (list.length === 0) {
    return (
      <div className="basket">
        <p>장바구니가 비었습니다</p>
      </div>
    );
  }
  if (list.length <= 0) return null;
  const totalPrice = list
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toLocaleString();

  return (
    <div className="basket">
      <div className="basketContainer">
        <img src="/images/2sop.png" alt="logo" className="logo" />
        <BasketHeader totalPrice={totalPrice} />
        <div>
          {list.map((productInfo, index) => {
            return (
              <BasketProduct
                key={index}
                productInfo={productInfo}
                setList={setList}
              />
            );
          })}
        </div>
      </div>
      <button className="order" onClick={goToPayment}>
        주문하기
      </button>
    </div>
  );
};

export default Basket;
