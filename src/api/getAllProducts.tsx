import axios from 'axios';

interface product {
  [key: string]: (string | number);
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
