import { Category } from "./getCategories";
import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
  }
  
  

const getProducts = (selectedCategory: Category | null, selectedType: string | null) => useData<Product>('/products', {
  params: {
    category: selectedCategory?.id,
    type: selectedType
  }
}, [selectedCategory?.id, selectedType]);

export default getProducts;
