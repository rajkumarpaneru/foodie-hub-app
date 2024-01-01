import useData from "./useData";

export interface Category {
    id: number;
    name: string;
    image_url: string;
  }
  
  

const getCategories = () => useData<Category>('/categories');

export default getCategories;
