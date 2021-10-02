import {useEffect, useState} from 'react';
import axios from 'axios';

const useFetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const {data} = await axios.get(
        'https://www.themuse.com/api/public/jobs?page=2',
      );
      setData(data.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, loading, error};
};

export default useFetch;
