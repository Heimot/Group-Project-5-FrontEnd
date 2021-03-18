import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import BottomLinks from './components/BottomLinks'

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductGroups />
      <ProductList />
      <BottomLinks />
      <Footer />
    </div>
  );
}

export default App;