import React from 'react';
import Image from 'next/image';

import inputSearchLogo from '../../../public/inputSearchLogo.svg';
import { useAppContext } from '../../context/context';
import { 
  SearchInput,
  SearchInputHelper,
  SearchInputLabel,
  SearchInputWrapper,
  SearchInputSection
} from './style';

function TextSearchInput() {
  const { textSearchValue, setTextSearchValue } = useAppContext();

  return (
    <SearchInputWrapper>
        <SearchInputSection>
          <SearchInputLabel htmlFor="search-input">
            <SearchInput
              type="text"
              id="search-input"
              name="search-input"
              placeholder="Pesquisar"
              value={ textSearchValue }
              onChange={ ({target}): void => setTextSearchValue(target.value) }
            />
          </SearchInputLabel>

          <SearchInputHelper>Digite o que procura</SearchInputHelper>
          <Image src={inputSearchLogo} alt="Wine logo" width={25} height={25}/>
        </SearchInputSection>
    </SearchInputWrapper>
  );
}

export default TextSearchInput;
