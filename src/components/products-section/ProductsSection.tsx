import React, { useEffect, useState } from 'react';

import getAllProducts, { product } from '../../api/getAllProducts';
import { useAppContext } from '../../context/context';
import filterByRadio from '../../utils/filterByRadio';
import ProductCard from './product-card/ProductCard';
import loadingImage from '../../../public/loading.gif';
import { CountText, ProductCount, ProductsWrapper, ProductsSectionStyled, LoadingWrapper } from './style';
import Image from 'next/image';

function ProductsSection() {
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { textSearchValue, filterValue} = useAppContext();

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
  }, [allProducts, textSearchValue, filterValue]);

  return (
    <ProductsSectionStyled>
      <ProductCount>{`${productsToDisplay.length} `}</ProductCount>
      <CountText>produtos encontrados</CountText>

      {!isLoading ?
        <ProductsWrapper>
          {productsToDisplay.map((product) => (<ProductCard product={product} key={product.id}/>))}
        </ProductsWrapper>
        :
        <LoadingWrapper>
          <Image src={loadingImage} alt="loading image" width={50} height={50}/>
        </LoadingWrapper>
      }
    </ProductsSectionStyled>
  );
}

export default ProductsSection;