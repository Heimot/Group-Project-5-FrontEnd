import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import BottomLinks from './components/BottomLinks'
import Mainos from './components/Mainos';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ProductGroups />
      <BottomLinks />
      <Footer />
      <Mainos />
    </div>
  );
}

export default App;
