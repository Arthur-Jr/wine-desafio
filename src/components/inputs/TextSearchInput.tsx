import React from 'react';
import Image from 'next/image';

import inputSearchLogo from '../../../public/inputSearchLogo.svg';
import { 
  SearchInput, SearchInputHelper, SearchInputLabel, SearchInputWrapper, SearchInputSection
} from './style';

function TextSearchInput() {
  return (
    <SearchInputWrapper>
        <SearchInputSection>
          <SearchInputLabel htmlFor="search-input">
            <SearchInput
              type="text"
              id="search-input"
              name="search-input"
              placeholder="Pesquisar"
            />
          </SearchInputLabel>

          <SearchInputHelper>Digite o que procura</SearchInputHelper>
          <Image src={inputSearchLogo} alt="Wine logo" width={25} height={25}/>
        </SearchInputSection>
    </SearchInputWrapper>
  );
}

export default TextSearchInput;
