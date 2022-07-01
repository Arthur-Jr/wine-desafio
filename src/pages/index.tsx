import Header from '../components/header/Header';
import TextSearchInput from '../components/search-input/TextSearchInput';
import { useAppContext } from '../context/context';

export default function Home() {
  const { searchStatus } = useAppContext();

  return (
    <main>
      <Header />
      { searchStatus && <TextSearchInput /> }
    </main>
  );
}
