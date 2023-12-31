import { SimpleGrid, Text } from "@chakra-ui/react";
import getProducts from "../hooks/getProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductsGrid = () => {
  const { products, error, isLoading } = getProducts();

  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
