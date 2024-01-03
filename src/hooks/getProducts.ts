import { ProductQuery } from "../App";
import { Category } from "./getCategories";
import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
  }
  
  

const getProducts = (productQuery: ProductQuery) => useData<Product>('/products', {
  params: {
    category: productQuery.category?.id,
    type: productQuery.type
  }
}, [productQuery]);

export default getProducts;
