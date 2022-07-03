import React from 'react';

import { product } from '../../api/getAllProducts';
import { useAppContext } from '../../context/context';
import handleAddCartButton from '../../utils/handleAddCartButton';
import priceToString from '../../utils/priceToString';
import { CartMessage } from '../../styles/mainStyle';
import {
  CountryFlag,
  DescriptionText,
  DescriptionTitle,
  DescriptionWrapper,
  DiscountDetail,
  FullPriceDetail,
  OriginSpan,
  OriginWrapper,
  PriceWrapper,
  ProductDetailStyled,
  ProductImage,
  ProductName,
  TypeSpan,
  TypeWrapper,
  PartnerPriceDetail,
  NoPartnerPriceDetail,
  PriceWrapperDetail,
  DetailButton,
} from './style';

function ProductDetail({ product }: { product: product }) {
  const { setCartCountState, addCartMessage, setAddCartMessage } = useAppContext();

  return (
    <>
      <ProductDetailStyled>
        <OriginWrapper>
          <OriginSpan>{'Vinho'}</OriginSpan>
          <OriginSpan>{'>'}</OriginSpan>
          <OriginSpan>{product.country}</OriginSpan>
          <OriginSpan>{'>'}</OriginSpan>
          <OriginSpan>{product.region}</OriginSpan>
        </OriginWrapper>

        <ProductName>{product.name}</ProductName>

        <TypeWrapper>
          <CountryFlag src={product.flag} />
          <TypeSpan>{product.country}</TypeSpan>
          <TypeSpan>{product.type}</TypeSpan>
          <TypeSpan>{product.classification}</TypeSpan>
          <TypeSpan>{product.volume}</TypeSpan>
        </TypeWrapper>

        <ProductImage src={product.image}/>

        <DescriptionWrapper>
          <DescriptionTitle>Descrição</DescriptionTitle>
          <DescriptionText>{product.sommelierComment}</DescriptionText>
        </DescriptionWrapper>

      </ProductDetailStyled>
      <PriceWrapper>
        <PriceWrapperDetail>
          <DiscountDetail>{`${product.discount}% OFF`}</DiscountDetail>
          <FullPriceDetail>{`R$ ${priceToString(product.price)}`}</FullPriceDetail>

          <PartnerPriceDetail>
            <PartnerPriceDetail>
              {'R$ '}
            </PartnerPriceDetail>
            {`${priceToString(product.priceMember)}`}
          </PartnerPriceDetail>

          <NoPartnerPriceDetail>
            {`preço não-sócio R$ ${priceToString(product.priceNonMember)}`}
          </NoPartnerPriceDetail>
        </PriceWrapperDetail>

        <DetailButton
          type="button"
          onClick={() => handleAddCartButton(product, setCartCountState, setAddCartMessage)}
        >
          Adicionar
        </DetailButton>
      </PriceWrapper>

      {addCartMessage.length > 0 && <CartMessage>{addCartMessage}</CartMessage>}
    </>
  );
}

export default ProductDetail;
