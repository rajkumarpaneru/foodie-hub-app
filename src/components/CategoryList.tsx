import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  // const { data, error, isLoading } = useCategories();
  const categories = ["category1", "category2", "cateogry3", "cateogory4"];

  return (
    <ul>
      {categories.map((category, index) => (
        <li key={index}>{category}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
