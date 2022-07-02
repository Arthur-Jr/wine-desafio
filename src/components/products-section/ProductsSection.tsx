import React, { useEffect, useState } from 'react';
import getAllProducts, { product } from '../../api/getAllProducts';
import { CountText, ProductCount, ProductsWrapper } from './style';

function ProductsSection() {
  const [allProducts, setAllProducts] = useState<product[]>([]);

  useEffect((): void => {
    getAllProducts().then((data) => setAllProducts(data));
  }, []);

  return (
    <ProductsWrapper>
      <ProductCount>{`${allProducts.length} `}</ProductCount>
      <CountText>produtos encontrados</CountText>
    </ProductsWrapper>
  );
}

export default ProductsSection;