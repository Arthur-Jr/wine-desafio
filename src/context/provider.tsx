import React, { ReactNode, useEffect, useState } from 'react';
import { appContext } from './context';

interface props {
  children: ReactNode;
}

function Provider({ children }: props) {
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [textSearchValue, setTextSearchValue] = useState<string>('');
  const [filterValue, setFilterValue] = useState<string>('');
  const [cartCountState, setCartCountState] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  const contextValue = {
    searchStatus,
    setSearchStatus,
    textSearchValue,
    setTextSearchValue,
    filterValue,
    setFilterValue,
    cartCountState,
    setCartCountState,
    isMobile
  };

  useEffect(() => {
    const resizeListener = () => {
      const PHONE_WIDTH_PX = 650;
      if (window.innerWidth > PHONE_WIDTH_PX) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);

  return (
    <appContext.Provider value={contextValue}>
      {children}
    </appContext.Provider>
  );
}

export default Provider;
