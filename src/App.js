import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header'
import Text from './components/Text';
import {SearchProvider} from './components/MovieSearchContext'

function App() {
  return (
    <SearchProvider>
      <Header />
      <Text />
      <Body />
      <Footer />
    </SearchProvider>
  );
}

export default App;
