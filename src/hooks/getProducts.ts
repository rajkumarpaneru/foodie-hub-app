import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
  }
  
interface Response {
    data: Product[];
  } 
  

const getProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const [error, setError] = useState("");

    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoading(true);

      apiClient
        .get<Response>("/products", {signal: controller.signal})
        .then((res) => {
          setProducts(res.data.data);
          setLoading(false);
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    return {products, error, isLoading}
    
}

export default getProducts;
