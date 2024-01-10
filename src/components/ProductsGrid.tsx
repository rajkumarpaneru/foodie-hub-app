import { SimpleGrid, Text } from "@chakra-ui/react";
import getProducts from "../hooks/getProducts";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";
import { Category } from "../hooks/getCategories";
import { ProductQuery } from "../App";

interface Props {
  productQuery: ProductQuery;
}

const ProductsGrid = ({ productQuery }: Props) => {
  const { data, error, isLoading } = getProducts(productQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductCardContainer key={skeleton}>
            <ProductCardSkeleton key={skeleton} />
          </ProductCardContainer>
        ))}
      {data.map((product) => (
        <ProductCardContainer key={product.id}>
          <ProductCard key={product.id} product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductsGrid;
