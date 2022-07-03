import React, { Dispatch, ReactNode, SetStateAction } from 'react';

import {
  EllipsisSpan,
  ChangePageButton,
  PageNumberButton,
  PageQuantityWrapper
} from './style';

interface props {
  productsQuantity: number;
  actualPage: number;
  setActualPage: Dispatch<SetStateAction<number>>;
}

function Pagination({ productsQuantity, actualPage, setActualPage }: props) {
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

export default Pagination;
