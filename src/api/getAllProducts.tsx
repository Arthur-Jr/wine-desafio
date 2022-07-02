import axios from 'axios';

export interface product {
  id: number;
  image: string;
  name: string;
  price: number;
  discount: number;
  priceMember: number;
  priceNonMember: number;
  type: string;
  classification: string;
  size: string;
  rating: number;
  avaliations: number;
  country: number;
  region: string;
  flag: string;
  sommelierComment: string;
}

interface data {
  items: product[];
}

const getAllProducts = async (): Promise<product[] | null[]> => {
  const URL = 'https://wine-back-test.herokuapp.com/products';

  try {
    const { data }: { data: data } = await axios.get(URL);
    return data.items;
  } catch (err) {
    return [];
  }
};

export default getAllProducts;
