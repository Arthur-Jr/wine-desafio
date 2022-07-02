import Header from '../components/header/Header';
import PriceFilter from '../components/price-filter/PriceFilter';
import ProductsSection from '../components/products-section/ProductsSection';
import TextSearchInput from '../components/search-input/TextSearchInput';
import { useAppContext } from '../context/context';
import { MainSection } from '../styles/mainStyle';

export default function Home() {
  const { searchStatus } = useAppContext();

  return (
    <main>
      <Header />
      { searchStatus && <TextSearchInput /> }
      <MainSection>
        <PriceFilter />
        <ProductsSection />
      </MainSection>
    </main>
  );
}
