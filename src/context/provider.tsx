import React, { ReactNode, useEffect, useState } from 'react';
import { product } from '../api/getAllProducts';
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
  const [allProducts, setAllProducts] = useState<product[]>([]);
  
  const contextValue = {
    searchStatus,
    setSearchStatus,
    textSearchValue,
    setTextSearchValue,
    filterValue,
    setFilterValue,
    cartCountState,
    setCartCountState,
    isMobile,
    allProducts,
    setAllProducts
  };

  useEffect(() => {
    const PHONE_WIDTH_PX = 650;

    const resizeListener = () => {
      if (window.innerWidth > PHONE_WIDTH_PX) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    if (window.innerWidth < PHONE_WIDTH_PX) {
      console.log('a');
      setIsMobile(true);
    }

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
