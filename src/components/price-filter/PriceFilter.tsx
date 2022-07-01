import React from 'react';

import FilterRadioInput from './inputs/FilterRadioInput';
import filterOptions from '../../utils/filterOptions';
import { Title, FilterWrapper, SubTitle, FilterForm, FormSection } from './style';

function PriceFilter() {
  return (
    <FilterWrapper>
      <Title>Refine sua busca</Title>
      <FormSection>
        <SubTitle>Por preço</SubTitle>

        <FilterForm>
          {Object.values(filterOptions).map((value: number[], index: number) => {
            const optionalText = value[0] === 40 ? `Até R$${value[0]}` : `Acima de R$${value[0]}`;
            return (
              <FilterRadioInput
                key={index}
                name="filter"
                text={ value.length > 1 ? `R$${value[0]} A R$${value[1]}` : optionalText }
                value={`${index + 1}`}
                id={`filter-radio-${index + 1}`}
              />
            );
          })}
        </FilterForm>
      </FormSection>
    </FilterWrapper>
  );
}

export default PriceFilter;
