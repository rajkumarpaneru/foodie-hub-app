import { SimpleGrid, Text } from "@chakra-ui/react";
import getProducts from "../hooks/getProducts";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  const { products, error } = getProducts();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
