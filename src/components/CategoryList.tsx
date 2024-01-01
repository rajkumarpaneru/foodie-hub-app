import useCategories from "../hooks/useCategories";

const CategoryList = () => {
  const { data, error, isLoading } = useCategories();

  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoryList;
