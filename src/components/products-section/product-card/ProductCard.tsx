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
  const getPricePart = (price: number, divisor: string, part: boolean): string => {
    const priceToString = price.toFixed(2);
    if (part) {
      return priceToString.substring(0, priceToString.indexOf(divisor)).replace('.', ',');
    }
    return priceToString.substring(priceToString.indexOf(divisor)).replace('.', ',');
  };

  return (
    <CardWrapper>
      <Card>
        <CardImage src={product.image} />
        <CardTitle>{product.name}</CardTitle>

        <FullPriceWrapper>
          <FullPrice>{`R$ ${product.price.toFixed(2).replace('.', ',')}`}</FullPrice>
          <CardDiscount>{`${product.discount}% OFF`}</CardDiscount>
        </FullPriceWrapper>

        <PartnerPriceWrapper>
          <PartnerText>SÓCIO WINE</PartnerText>
          <PartnerText>
            {'R$ '}
            <PartnerPrice>{getPricePart(product.priceMember, '.', true)}</PartnerPrice>
            {getPricePart(product.priceMember, '.', false)}
          </PartnerText>
        </PartnerPriceWrapper>

        <NoPartnerPrice>
          {`Não sócio R$ ${product.priceNonMember.toFixed(2).replace('.', ',')}`}
        </NoPartnerPrice>
      </Card>

      <CardButton type="button">ADICIONAR</CardButton>
    </CardWrapper>
  );
}

export default ProductCard;