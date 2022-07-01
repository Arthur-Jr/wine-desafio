import React from 'react';
import { FilterInput, FilterLabel } from './style';

interface props {
  id: string;
  text: string;
  name: string;
  value: string;
  handleChange: () => void;
}

function FilterRadioInput({ id, text, name, value, handleChange }: props) {
  return (
    <FilterLabel htmlFor={id}>
      <FilterInput
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {` ${text}`}
    </FilterLabel>
  );
}

export default FilterRadioInput;