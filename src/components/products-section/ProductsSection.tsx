import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import getAllProducts, { product } from '../../api/getAllProducts';
import { useAppContext } from '../../context/context';
import filterByRadio from '../../utils/filterByRadio';
import ProductCard from './product-card/ProductCard';
import Pagination from './pagination/Pagination';
import loadingImage from '../../../public/loading.gif';

import {
  CountText,
  ProductCount,
  ProductsWrapper,
  ProductsSectionStyled,
  LoadingWrapper
} from './style';

function ProductsSection() {
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [actualPage, setActualPage] = useState<number>(1);

  const { textSearchValue, filterValue, isMobile } = useAppContext();

  useEffect((): void => {
    getAllProducts().then((data) => {
      setAllProducts(data);
      setProductsToDisplay(data);
      setIsLoading(false);
    });
  }, []);

  useEffect((): void => {
    let toDisplay = allProducts;

    // Filtro do radio input:
    toDisplay = filterByRadio(filterValue, toDisplay);

    // Filtro do text input:
    toDisplay = toDisplay.filter(({ name }: { name: string }): boolean => (
      name.toLowerCase().includes(textSearchValue.toLowerCase()
    )));

    setProductsToDisplay(toDisplay);
    setActualPage(1);
  }, [allProducts, textSearchValue, filterValue]);

  const getProductsByPage = (): product[] => {
    if (isMobile) {
      return productsToDisplay.slice(0, 12 * actualPage);
    }

    if (!isMobile && actualPage === 1) {
      return productsToDisplay.slice(0, 12);
    } else {
      return productsToDisplay.slice(0 + 12 * (actualPage - 1), 12 * actualPage);
    }
  };

  getProductsByPage();

  return (
    <ProductsSectionStyled>
      <div>
        <ProductCount>{`${productsToDisplay.length} `}</ProductCount>
        <CountText>produtos encontrados</CountText>
      </div>

      {!isLoading ?
        <ProductsWrapper>
          {
            getProductsByPage()
            .map((product) => (<ProductCard product={product} key={product.id}/>))
          }
        </ProductsWrapper>
        :
        <LoadingWrapper>
          <Image src={loadingImage} alt="loading image" width={50} height={50}/>
        </LoadingWrapper>
      }

      {!isLoading && productsToDisplay.length > 0 &&
        <Pagination
          productsQuantity={productsToDisplay.length}
          actualPage={actualPage}
          setActualPage={setActualPage}
        />
      }
    </ProductsSectionStyled>
  );
}

export default ProductsSection;
