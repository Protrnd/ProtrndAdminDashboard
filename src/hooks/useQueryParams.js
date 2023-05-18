import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const params = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    setQueryParams(params);
  }, [location.search]);

  return queryParams;
};

export default useQueryParams;
