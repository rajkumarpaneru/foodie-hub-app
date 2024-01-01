import useData from "./useData";

export interface Product {
    id: number;
    name: string;
    type: string;
    image_url: string;
    price: number;
  }
  
  

const getProducts = () => useData<Product>('/products');

export default getProducts;
