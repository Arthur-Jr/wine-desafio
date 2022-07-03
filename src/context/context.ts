import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type appContextType = {
  searchStatus: boolean;
  setSearchStatus: Dispatch<SetStateAction<boolean>>;
  textSearchValue: string;
  setTextSearchValue: Dispatch<SetStateAction<string>>;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
  cartCountState: number;
  setCartCountState: Dispatch<SetStateAction<number>>;
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
};

export const appContext = createContext<appContextType>(appContexDefaultValue);

export const useAppContext = () => {
  return useContext(appContext);
};

// Refêrencia de como usar context com next.js e TS:
// https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25