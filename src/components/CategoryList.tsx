import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCategories, { Category } from "../hooks/getCategories";

interface Props {
  onSelectCategory: (category: Category) => void;
}

const CategoryList = ({ onSelectCategory }: Props) => {
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
            <Button
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
  );
};

export default CategoryList;
