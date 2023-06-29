import { useEffect, useState } from 'react';

const useFetch = (url = '') => {
     const [data, setData] = useState();

     useEffect(() => {
          const fetchData = async () => {
               const response = await fetch(url);
               const json = await response.json();
               setData(json);
          };

          fetchData();
     }, []);

     return data;
};

export default useFetch;
