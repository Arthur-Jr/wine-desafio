import { useRouter } from 'next/router';
import React from 'react';

import { product } from '../../../api/getAllProducts';
import { useAppContext } from '../../../context/context';
import handleAddCartButton from '../../../utils/handleAddCartButton';
import priceToString from '../../../utils/priceToString';
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
  const { setCartCountState, setAddCartMessage } = useAppContext();
  const router = useRouter();

  const getPricePart = (price: number, part: boolean): string => {
    const priceString = priceToString(price);
    if (part) {
      return priceString.substring(0, priceString.indexOf(','));
    }
    return priceString.substring(priceString.indexOf(','));
  };

  const handleCardClick = (id: number): void => {
    router.push(`/product/${id}`);
  };

  return (
    <CardWrapper>
      <Card onClick={() => handleCardClick(product.id)}>
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

      <CardButton
        type="button"
        onClick={() => handleAddCartButton(product, setCartCountState, setAddCartMessage)}
      >
        ADICIONAR
      </CardButton>
    </CardWrapper>
  );
}

export default ProductCard;