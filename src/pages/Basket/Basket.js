import BasketHeader from '../../components/Basket/BasketHeader/BasketHeader';
import BasketProduct from '../../components/Basket/BasketProduct/BasketProduct';
import { useGetList } from '../../components/Basket/BasketProduct/useGetList';
import './Basket.scss';

const Basket = () => {
  const { list, loading } = useGetList();

  const totalPrice = list
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toLocaleString();

  if (loading) {
    return null;
  }

  return (
    <div className="basket">
      <div className="basketContainer">
        <img src="/images/2sop.png" alt="logo" className="logo" />
        <BasketHeader totalPrice={totalPrice} />
        <div>
          {list.map(productInfo => {
            return (
              <BasketProduct
                key={productInfo.cartId}
                productInfo={productInfo}
              />
            );
          })}
        </div>
      </div>
      <button className="order">주문하기</button>
    </div>
  );
};

export default Basket;
