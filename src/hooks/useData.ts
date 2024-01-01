import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

  
interface Response <T>{
    data: T[];
  } 
  

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
    const [data, setData] = useState<T[]>([]);

    const [error, setError] = useState("");

    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<Response <T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res) => {
          setData(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, deps ?  [...deps] : []);

    return {data, error, isLoading};
    
}

export default useData;
