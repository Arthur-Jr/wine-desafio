import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { product } from '../../api/getAllProducts';
import Header from '../../components/header/Header';
import ProductDetail from '../../components/product-details/ProductDetail';
import { useAppContext } from '../../context/context';

function Detail() {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState<product>();
  const { allProducts } = useAppContext();

  useEffect(() => {
    const product = allProducts
    .find(({ id }: { id: number }) => id.toString() === router.query.id);

    product ? setProductDetail(product) : router.push('/');
  }, [allProducts, router]);
  
  return (
    <main>
      <Header />
      {productDetail && <ProductDetail product={productDetail} />}
    </main>
  );
}

export default Detail;