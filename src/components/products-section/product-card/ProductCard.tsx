import React from 'react';

import { product } from '../../../api/getAllProducts';
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

      <CardButton type="button">ADICIONAR</CardButton>
    </CardWrapper>
  );
}

export default ProductCard;