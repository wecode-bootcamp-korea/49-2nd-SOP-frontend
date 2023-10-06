import { HOST } from '../../Variable';
import { useEffect, useState } from 'react';

const useGetList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCart = () => {
    return fetch(`${HOST}/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        authorization: localStorage.getItem('loginToken'),
      },
    });
  };

  useEffect(() => {
    getCart()
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        const { data } = result;
        setList(data);
      });
  }, []);

  return { list, loading, setList, getCart };
};

export { useGetList };
