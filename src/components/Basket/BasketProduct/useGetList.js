import { HOST } from '../../Variable';
import { useEffect, useState } from 'react';

const useGetList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${HOST}/cart`, {
      method: 'GET',
      headers: {
        authorization: window.localStorage.getItem('token'),
      },
    })
      .then(response => response.json())
      .then(result => {
        setLoading(false);
        setList(result);
      });
  }, []);
  return { list, loading };
};

export { useGetList };
