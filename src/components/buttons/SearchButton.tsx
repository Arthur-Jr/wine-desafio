import React from 'react';
import Image from 'next/image';

import searchLogo from '../../../public/searchLogo.png';
import { SearchButtonStyled } from './style';

interface props {
  handleClick: () => void,
}

function SearchButton({ handleClick }: props) {
  return (
    <SearchButtonStyled type="button" onClick={handleClick}>
      <Image src={searchLogo} alt="Search button" width={56} height={56}/>
    </SearchButtonStyled>
  );
}

export default SearchButton;
