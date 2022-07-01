import React from 'react';

import { useAppContext } from '../../../context/context';
import { FilterInput, FilterLabel } from './style';

interface props {
  id: string;
  text: string;
  name: string;
  value: string;
}

interface target {
  value: string;
  checked: boolean
}

function FilterRadioInput({ id, text, name, value }: props) {
  const { filterValue, setFilterValue } = useAppContext();

  const handleClick = (target: target): void => {
    if(filterValue == target.value) {
      target.checked = false;
      setFilterValue('');
    } else {
      setFilterValue(value);
    }
  };

  return (
    <FilterLabel htmlFor={id}>
      <FilterInput
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={({ target }) => handleClick(target as HTMLInputElement)}
      />
      {` ${text}`}
    </FilterLabel>
  );
}

export default FilterRadioInput;