import React from 'react';
import Image from 'next/image';

import searchLogo from '../../../public/searchLogo.png';
import coloredSearchLogo from '../../../public/coloredSearchLogo.png';
import { SearchButtonStyled } from './style';
import { useAppContext } from '../../context/context';

interface props {
  handleClick: () => void,
}

function SearchButton({ handleClick }: props) {
  const { searchStatus } = useAppContext();

  return (
    <SearchButtonStyled type="button" onClick={handleClick}>
      <Image
        src={searchStatus ? coloredSearchLogo : searchLogo}
        alt="Search button"
        width={56}
        height={56}
      />
    </SearchButtonStyled>
  );
}

export default SearchButton;
