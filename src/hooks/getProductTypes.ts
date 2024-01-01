import useData from "./useData";

// interface ProductType {
//     id: number;
//     name: string;
// }

const getProductTypes = () => useData<string>('/products/types');

export default getProductTypes;