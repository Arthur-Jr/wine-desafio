import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { useAppContext } from '../../../context/context';

import {
  EllipsisSpan,
  ChangePageButton,
  PageNumberButton,
  PageQuantityWrapper,
  NextPageMobile,
  MobilePageCount
} from './style';

interface props {
  productsQuantity: number;
  actualPage: number;
  setActualPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ productsQuantity, actualPage, setActualPage }: props) {
  const { isMobile } = useAppContext();

  const getPages = (): (string | number)[] => {
    let pageArray = [];
    const maxPage = Math.ceil(productsQuantity / 12);

    pageArray = ['...', actualPage - 1, actualPage, actualPage + 1, '...'];

    if (actualPage === 1) {
      pageArray = pageArray.slice(2);
      pageArray[2] = 3;
      maxPage > 3 && pageArray.push('...');
    }

    if (actualPage === maxPage) {
      pageArray[0] = actualPage - 2;
      pageArray.unshift('...');
      pageArray.pop();
      pageArray.pop();
    }

    return pageArray;
  };

  const handleNextPageClick = (nextPage: number): void => {
    if (actualPage !== nextPage) {
      setActualPage(nextPage);
    }
  };

  const setPageDisplay = (value: (string | number)): ReactNode => {
    if (typeof value === 'string') {
      return <EllipsisSpan>{value}</EllipsisSpan>;
    }

    return (
      <PageNumberButton
        type="button"
        active={actualPage === value}
        onClick={() => handleNextPageClick(value)}
      >
        {value}
      </PageNumberButton>
    );
  };

  const getMobileQauntityPerPage = (): number => {
    const maxPage = Math.ceil(productsQuantity / 12);
    return actualPage === maxPage ? productsQuantity : 12 * actualPage;
  };

  if (!isMobile) {
    return (
      <PageQuantityWrapper>
        {actualPage > 1 && 
          <ChangePageButton onClick={() => handleNextPageClick(actualPage - 1)} type="button">
            {'<< Anterior'}
          </ChangePageButton>
        }
  
        {getPages().map((page: (string | number)) => setPageDisplay(page))}
  
        {actualPage !== Math.ceil(productsQuantity / 12) && 
          <ChangePageButton onClick={() => handleNextPageClick(actualPage + 1)} type="button">
            {'Próximo >>'}
          </ChangePageButton>
        }
      </PageQuantityWrapper>
    );
  }

  return (
    <PageQuantityWrapper>
      <NextPageMobile type="button" onClick={() => handleNextPageClick(actualPage + 1)}>
        Mostrar mais
      </NextPageMobile>

      <MobilePageCount>
        {`Exibindo ${getMobileQauntityPerPage()} de ${productsQuantity} produtos no total`}
      </MobilePageCount>
    </PageQuantityWrapper>
  );
}

export default Pagination;
