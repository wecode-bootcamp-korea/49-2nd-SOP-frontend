import { useState } from 'react';
import SelectQuantity from '../../SelectQuantity/SelectQuantity';
import { HOST } from '../../Variable';
import './BasketProduct.scss';

const BasketProduct = ({ productInfo }) => {
  const { cartId, productName, productImage, size, price, quantity } =
    productInfo;

  const [productQuantity, setProductQuantity] = useState(quantity);

  const handleQuantity = event => {
    const { value } = event.target;
    setProductQuantity(value);
    fetch(`${HOST}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: '',
      },
      body: JSON.stringify({
        cartId,
        quantity: value,
      }),
    })
      .then(res => res.json())
      .then();
  };

  const handleDelete = () => {
    fetch(`${HOST}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: '',
      },
      body: JSON.stringify({
        cartId,
      }),
    });
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
