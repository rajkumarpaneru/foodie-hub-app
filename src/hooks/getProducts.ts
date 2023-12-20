import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
  }
  
interface Response {
    data: Product[];
  }
  

const getProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
      apiClient
        .get<Response>("/products", {signal: controller.signal})
        .then((res) => setProducts(res.data.data))
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);
        });

        return () => controller.abort();
    }, []);

    return {products, error}
    
}

export default getProducts;
