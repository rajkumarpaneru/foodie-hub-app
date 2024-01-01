import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Category {
    id: number;
    name: string;
    image_url: string;
  }
  
interface Response {
    data: Category[];
  } 
  

const useCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    const [error, setError] = useState("");

    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<Response>("/categories", {signal: controller.signal})
        .then((res) => {
          setCategories(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {categories, error, isLoading};
    
}

export default useCategories;
