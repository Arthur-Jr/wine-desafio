import React, { useEffect, useState } from 'react';

import getAllProducts, { product } from '../../api/getAllProducts';
import { useAppContext } from '../../context/context';
import filterByRadio from '../../utils/filterByRadio';
import ProductCard from './product-card/ProductCard';
import { CountText, ProductCount, ProductsWrapper, ProductsSectionStyled } from './style';

function ProductsSection() {
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<product[]>([]);

  const { textSearchValue, filterValue} = useAppContext();

  useEffect((): void => {
    getAllProducts().then((data) => {
      setAllProducts(data);
      setProductsToDisplay(data);
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

      <ProductsWrapper>
        {productsToDisplay.map((product) => (<ProductCard product={product} key={product.id}/>))}
      </ProductsWrapper>
    </ProductsSectionStyled>
  );
}

export default ProductsSection;