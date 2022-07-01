import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type appContextType = {
  searchStatus: boolean;
  setSearchStatus: Dispatch<SetStateAction<boolean>>;
  textSearchValue: string;
  setTextSearchValue: Dispatch<SetStateAction<string>>
}

const appContexDefaultValue: appContextType = {
  searchStatus: false,
  setSearchStatus: () => null,
  textSearchValue: '',
  setTextSearchValue: () => null,
};

export const appContext = createContext<appContextType>(appContexDefaultValue);

export const useAppContext = () => {
  return useContext(appContext);
};

// Refêrencia de como usar context com next.js e TS:
// https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25