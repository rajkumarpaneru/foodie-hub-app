import { Text } from "@chakra-ui/react";
import getProducts from "../hooks/getProducts";

const ProductsGrid = () => {
  const { products, error } = getProducts();

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
