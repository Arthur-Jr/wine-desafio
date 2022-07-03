import React, { Dispatch, ReactNode, SetStateAction } from 'react';

import { useAppContext } from '../../../context/context';
import pageQuantity from '../../../utils/pageQauntity';

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
    const maxPage = Math.ceil(productsQuantity / pageQuantity);

    pageArray = ['...', actualPage - 1, actualPage, actualPage + 1, '...'];

    if (actualPage === 1) {
      pageArray = pageArray.slice(2);
      maxPage > 2 ? pageArray.splice(2, 1, 3) : pageArray.pop();
      maxPage > 3 && pageArray.push('...');
    }

    if (actualPage === maxPage) {
      actualPage - 2 >= 1 ? pageArray.splice(0, 1, actualPage - 2) : pageArray.shift();
      actualPage > 3 && pageArray.unshift('...');
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

  const setPageDisplay = (value: (string | number), index: number): ReactNode => {
    if (typeof value === 'string') {
      return <EllipsisSpan key={index}>{value}</EllipsisSpan>;
    }

    return (
      <PageNumberButton
        type="button"
        active={actualPage === value}
        onClick={() => handleNextPageClick(value)}
        key={index}
      >
        {value}
      </PageNumberButton>
    );
  };

  const getMobileQauntityPerPage = (): number => {
    const maxPage = Math.ceil(productsQuantity / pageQuantity);
    return actualPage === maxPage ? productsQuantity : pageQuantity * actualPage;
  };

  if (!isMobile) {
    return (
      <PageQuantityWrapper>
        {actualPage > 1 && 
          <ChangePageButton onClick={() => handleNextPageClick(actualPage - 1)} type="button">
            {'<< Anterior'}
          </ChangePageButton>
        }
  
        {getPages().map((page: (string | number), index: number) => setPageDisplay(page, index))}
  
        {actualPage !== Math.ceil(productsQuantity / pageQuantity) && 
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
