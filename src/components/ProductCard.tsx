import React from "react";
import { Product } from "../hooks/getProducts";
import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import ProductTypeIcon from "./ProductTypeIcon";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={product.image_url} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <HStack justifyContent="space-between">
          <ProductTypeIcon type={product.type} />
          <Badge
            colorScheme="green"
            fontSize={"16px"}
            paddingX={2}
            borderRadius="4px"
          >
            ${product.price.toFixed(2)}
          </Badge>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
