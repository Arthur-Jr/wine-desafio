import { Dispatch, SetStateAction } from 'react';
import { product } from '../api/getAllProducts';

const handleAddCartButton = (product: product, setCartCountState: Dispatch<SetStateAction<number>>): void => {
  const actualStorage: product[] = JSON.parse(localStorage.getItem('wineCart'));

  if (actualStorage !== null) {
    localStorage.setItem('wineCart', JSON.stringify([...actualStorage, product]));
    setCartCountState(actualStorage.length + 1);
  } else {
    localStorage.setItem('wineCart', JSON.stringify([product]));
    setCartCountState(1);
  }
};

export default handleAddCartButton;
