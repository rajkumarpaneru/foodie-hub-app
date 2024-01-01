import { Spinner } from "@chakra-ui/react";
import getCategories from "../hooks/getCategories";

const CategoryList = () => {
  const { data, error, isLoading } = getCategories();

  // const categories = ["category1", "category2", "cateogry3", "cateogory4"];

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
