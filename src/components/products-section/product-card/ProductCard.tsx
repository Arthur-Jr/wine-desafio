import React from 'react';

import { product } from '../../../api/getAllProducts';
import { useAppContext } from '../../../context/context';
import {
  Card,
  CardImage,
  CardWrapper,
  CardTitle,
  FullPriceWrapper,
  FullPrice,
  CardDiscount,
  PartnerPriceWrapper,
  PartnerText,
  PartnerPrice,
  NoPartnerPrice,
  CardButton
} from './style';

function ProductCard({ product }: { product: product }) {
  const { setCartCountState } = useAppContext();

  const priceToString = (price: number): string => {
    return price.toFixed(2).replace('.', ',');
  };

  const getPricePart = (price: number, part: boolean): string => {
    const priceString = priceToString(price);
    if (part) {
      return priceString.substring(0, priceString.indexOf(','));
    }
    return priceString.substring(priceString.indexOf(','));
  };

  const handleCartButton = (product: product): void => {
    const actualStorage: product[] = JSON.parse(localStorage.getItem('wineCart'));

    if (actualStorage !== null) {
      localStorage.setItem('wineCart', JSON.stringify([...actualStorage, product]));
      setCartCountState(actualStorage.length + 1);
    } else {
      localStorage.setItem('wineCart', JSON.stringify([product]));
      setCartCountState(1);
    }
  };

  return (
    <CardWrapper>
      <Card>
        <CardImage src={product.image} />
        <CardTitle>{product.name}</CardTitle>

        <FullPriceWrapper>
          <FullPrice>{`R$ ${priceToString(product.price)}`}</FullPrice>
          <CardDiscount>{`${product.discount}% OFF`}</CardDiscount>
        </FullPriceWrapper>

        <PartnerPriceWrapper>
          <PartnerText>SÓCIO WINE</PartnerText>
          <PartnerText>
            {'R$ '}
            <PartnerPrice>{getPricePart(product.priceMember, true)}</PartnerPrice>
            {getPricePart(product.priceMember, false)}
          </PartnerText>
        </PartnerPriceWrapper>

        <NoPartnerPrice>
          {`Não sócio R$ ${priceToString(product.priceNonMember)}`}
        </NoPartnerPrice>
      </Card>

      <CardButton type="button" onClick={() => handleCartButton(product)}>ADICIONAR</CardButton>
    </CardWrapper>
  );
}

export default ProductCard;