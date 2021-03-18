import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import BottomLinks from './components/BottomLinks'
import Mainos from './components/Mainos';
import './App.css'

function App() {
  return (
    <div className="middleSmol">
      <Navigation />
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <ProductGroups />
        </div>
        <div className="col-md-9 col-lg-10">
          <ProductList />
        </div>
      </div>
      <BottomLinks />
      <Footer />
      <Mainos />
    </div>
  );
}

export default App;