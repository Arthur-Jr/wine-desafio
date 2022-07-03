import { Dispatch, SetStateAction } from 'react';
import { product } from '../api/getAllProducts';

const timedMessage = (setMessage: Dispatch<SetStateAction<string>>): void => {
  const TWO_SECONDS = 2000;
  setMessage('Produto Adicionado');

  setTimeout(() => {
    setMessage('');
  }, TWO_SECONDS);
};

const handleAddCartButton = (
  product: product,
  setCartCountState: Dispatch<SetStateAction<number>>,
  setCartMessage: Dispatch<SetStateAction<string>>
): void => {
  const actualStorage: product[] = JSON.parse(localStorage.getItem('wineCart'));

  if (actualStorage !== null) {
    localStorage.setItem('wineCart', JSON.stringify([...actualStorage, product]));
    setCartCountState(actualStorage.length + 1);
  } else {
    localStorage.setItem('wineCart', JSON.stringify([product]));
    setCartCountState(1);
  }

  timedMessage(setCartMessage);
};

export default handleAddCartButton;
