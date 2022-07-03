import React, { ReactNode, useState } from 'react';
import { appContext } from './context';

interface props {
  children: ReactNode;
}

function Provider({ children }: props) {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [textSearchValue, setTextSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const [cartCountState, setCartCountState] = useState<number>(0);
  
  const contextValue = {
    searchStatus,
    setSearchStatus,
    textSearchValue,
    setTextSearchValue,
    filterValue,
    setFilterValue,
    cartCountState,
    setCartCountState
  };

  return (
    <appContext.Provider value={contextValue}>
      {children}
    </appContext.Provider>
  );
}

export default Provider;
