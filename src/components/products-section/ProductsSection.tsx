import React, { useEffect, useState } from 'react';
import getAllProducts, { product } from '../../api/getAllProducts';
import ProductCard from './product-card/ProductCard';
import { CountText, ProductCount, ProductsWrapper, ProductsSectionStyled } from './style';

function ProductsSection() {
  const [allProducts, setAllProducts] = useState<product[]>([]);
  const [productsToDisplay, setProductsToDisplay] = useState<product[]>([]);

  useEffect((): void => {
    getAllProducts().then((data) => {
      setAllProducts(data);
      setProductsToDisplay(data);
    });
  }, []);

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