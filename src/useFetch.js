import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setIsPending(false);
        setData(res.data.posts);
        setError(null);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Request canceled", err.message);
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });

    return () => {
      source.cancel("Operation canceled by the user.");
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
