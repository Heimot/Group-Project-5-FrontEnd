import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/navigation';
import ProductGroups from './components/productGroups';
import Footer from './components/Footer'
import ProductList from './components/ProductList';
import BottomLinks from './components/BottomLinks'
import AdSlider from './components/ads';
import ProductPage from './components/productPage';
import './App.css'

function App() {
  return (
    <Router>
      <div className="middleSmol container">
        <Switch>
          <Route path="/">
            <Navigation />
            <div className="row rowWidth">
              <div className="col-md-3 col-lg-2 productGroupsRow">
                <Route exact path="/">
                  <ProductGroups />
                </Route>
              </div>
              <div className="col-md-9 col-lg-10 adSliderRow">
                <Route exact path="/">
                  <AdSlider />
                </Route>
              </div>
            </div>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route exact path="/">
              <ProductList />
            </Route>
            <BottomLinks />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;