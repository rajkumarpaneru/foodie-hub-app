import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Product {
  id: number;
  name: string;
}

interface Response {
  data: Product[];
}

const ProductsGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<Response>("/products")
      .then((res) => setProducts(res.data.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductsGrid;
