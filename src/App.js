import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductGroups />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
