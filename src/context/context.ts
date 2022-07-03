import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { product } from '../api/getAllProducts';

type appContextType = {
  searchStatus: boolean;
  setSearchStatus: Dispatch<SetStateAction<boolean>>;
  textSearchValue: string;
  setTextSearchValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  cartCountState: number;
  setCartCountState: Dispatch<SetStateAction<number>>;
  isMobile: boolean;
  allProducts: product[];
  setAllProducts: Dispatch<SetStateAction<product[]>>;
  addCartMessage: string;
  setAddCartMessage: Dispatch<SetStateAction<string>>;
}

const appContexDefaultValue: appContextType = {
  searchStatus: false,
  setSearchStatus: () => null,
  textSearchValue: '',
  setTextSearchValue: () => null,
  filterValue: '',
  setFilterValue: () => null,
  cartCountState: 0,
  setCartCountState: () => null,
  isMobile: false,
  allProducts: [],
  setAllProducts: () => null,
  addCartMessage: '',
  setAddCartMessage: () => null,
};

export const appContext = createContext<appContextType>(appContexDefaultValue);

export const useAppContext = () => {
  return useContext(appContext);
};

// Refêrencia de como usar context com next.js e TS:
// https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25