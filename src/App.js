import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import ProductGroups from './components/ProductGroups';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import BottomLinks from './components/BottomLinks'
import AdSlider from './components/Ads';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import './App.css'
import Tietoja from './components/Tietoja';
import Service from "./components/Service";

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
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/product">
              <ProductPage />
            </Route>
            <Route exact path="/">
              <ProductList />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route exact path="/">
              <BottomLinks />
              <Tietoja />
            </Route>
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;