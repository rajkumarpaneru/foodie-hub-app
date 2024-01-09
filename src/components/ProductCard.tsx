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
import noImage from "../assets/placeholder.jpeg";
import SpiceMeter from "./SpiceMeter";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.image_url ? product.image_url : noImage} />
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
        <SpiceMeter spiceLevel={product.spiceLevel} />
      </CardBody>
    </Card>
  );
};

export default ProductCard;
