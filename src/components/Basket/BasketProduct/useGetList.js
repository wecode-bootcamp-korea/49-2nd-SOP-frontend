import { useEffect, useState } from 'react';

const useGetList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch('/data/basketMockData.json')
      .then(res => res.json())
      .then(result => {
        setLoading(false);
        setList(result);
      });
  }, []);
  return { list, loading };
};

export { useGetList };
