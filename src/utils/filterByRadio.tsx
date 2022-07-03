import filterOptions from './filterOptions';
import { product } from '../api/getAllProducts';

function filterByRadio (option: string, products: product[]): product[] {
  if (filterOptions[option] === undefined) {
    return products;
  }
  
  const [min, max] = filterOptions[option];

  if (max === undefined) {
    return products.filter(({ priceMember }: { priceMember: number }): boolean => (
      min === 40 ? priceMember <= min : priceMember > min
    ));
  }

  return products.filter(({ priceMember }) => priceMember >= min && priceMember <= max);
}

export default filterByRadio;
