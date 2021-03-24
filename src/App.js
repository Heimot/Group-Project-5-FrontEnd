import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import BottomLinks from './components/BottomLinks'
import AdSlider from './components/ads';
import './App.css'
import Tietoja from './components/Tietoja';

function App() {
  return (
    <div className="middleSmol">
      <Navigation />
      <div className="row">
        <div className="col-md-3 col-lg-2">
          <ProductGroups />
        </div>
        <div className="col-md-9 col-lg-10">
          <AdSlider />
        </div>
      </div>
      <ProductList />
      <BottomLinks />
      <Tietoja />
      <Footer />
    </div>
  );
}

export default App;