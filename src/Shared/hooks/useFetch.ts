import { useEffect, useState } from "react";

const useFetch = (url: string, options?: RequestInit) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    setIsError(false);
    setData(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
          ...options,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
