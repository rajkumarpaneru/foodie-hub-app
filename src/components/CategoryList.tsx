import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCategories, { Category } from "../hooks/getCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
  selectedCategory: Category | null;
}

const CategoryList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, error, isLoading } = getCategories();

  // const categories = ["category1", "category2", "cateogry3", "cateogory4"];

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Categories
      </Heading>
      <List>
        {data.map((category) => (
          <ListItem key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={category.image_url}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={
                  category.id === selectedCategory?.id ? "bold" : "normal"
                }
                onClick={() => onSelectCategory(category)}
                variant="link"
                fontSize="lg"
              >
                {category.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryList;
