import { useState } from 'react';
import SelectQuantity from '../../SelectQuantity/SelectQuantity';
import { HOST } from '../../Variable';
import { useGetList } from './useGetList';
import './BasketProduct.scss';

const BasketProduct = ({ productInfo, setList }) => {
  const {
    cartId,
    productId,
    id,
    productName,
    productImage,
    size,
    price,
    quantity,
  } = productInfo;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const { getCart } = useGetList();

  const handleQuantity = event => {
    const { value } = event.target;
    setProductQuantity(value);
    fetch(`${HOST}/cart/fix`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('loginToken'),
      },
      body: JSON.stringify({
        cartId,
        id,
        productId,
        quantity: Number(value),
      }),
    })
      .then(res => res.json())
      .then(() =>
        getCart()
          .then(res => res.json())
          .then(result => setList(result.data)),
      );
  };

  const handleDelete = () => {
    fetch(`${HOST}/cart/${cartId}/${productId}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('loginToken'),
      },
    })
      .then(res => res.json())
      .then(() =>
        getCart()
          .then(res => res.json())
          .then(result => setList(result.data)),
      );
  };

  return (
    <div className="BasketProduct">
      <img
        src={`${productImage}`}
        alt="productImage"
        className="productImage"
      />
      <div>
        <div>{productName}</div>
        <div className="productInfo">
          <div>{size}</div>
          <div className="delete" onClick={handleDelete}>
            삭제
          </div>
        </div>
      </div>
      <div>
        <SelectQuantity handleQuantity={handleQuantity} />
        <div>₩{(price * productQuantity).toLocaleString()}</div>
      </div>
    </div>
  );
};

export default BasketProduct;
