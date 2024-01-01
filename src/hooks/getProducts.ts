import { Category } from "./getCategories";
import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
  }
  
  

const getProducts = (selectedCategory: Category | null) => useData<Product>('/products', {
  params: {
    category: selectedCategory?.id
  }
}, [selectedCategory?.id]);

export default getProducts;
