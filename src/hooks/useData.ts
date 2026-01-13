import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint, {
        ...requestConfig,              // ✅ include params, headers, etc.
        signal: controller.signal,      // ✅ keep abort support
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps?  [...deps] : []); // ✅ refetch when filters change

  return { data, error, isLoading };
};

export default useData;
