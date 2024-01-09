import { ProductQuery } from "../App";
import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
    spiceLevel: number;
  }
  
  

const getProducts = (productQuery: ProductQuery) => useData<Product>('/products', {
  params: {
    category: productQuery.category?.id,
    type: productQuery.type,
    order_by: productQuery.sortOrder,
    search: productQuery.searchText
  }
}, [productQuery]);

export default getProducts;
