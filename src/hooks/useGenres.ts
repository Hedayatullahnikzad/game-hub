import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

interface Genre {
    id: number;
    name: string;
}
interface FetchGenresResponse {
    count: number;
    results: Genre[];
}
 const useGenres = () => {
 const [genres, setGanres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {signal: controller.signal})
      .then((res) => {
        setGanres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if(axios.isCancel(err)) return;
        setError(err.message)
        setLoading(false)

      });
    
    return () => controller.abort();
  }, []);

  return {genres,error, isLoading}
 }
 export default useGenres;