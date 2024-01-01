import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCategories from "../hooks/getCategories";

const CategoryList = () => {
  const { data, error, isLoading } = getCategories();

  // const categories = ["category1", "category2", "cateogry3", "cateogory4"];

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={category.image_url} />
            <Text fontSize="lg">{category.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoryList;
