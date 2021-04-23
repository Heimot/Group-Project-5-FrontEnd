import { useEffect, useState } from 'react';
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
import Contacts from "./components/YhteystiedotSivu.js";
import YritysMyynti from './components//YritysMyynti';
import Service from "./components/Service";
import Ukk from "./components/Ukk";
import Tietosuoja from "./components/Tietosuoja";
import CartAlert from './components/CartAlert';
import Registration from "./components/Registration";
import InfoGroups from "./components/InfoGroups";
import Producers from "./components/Producers";
import Admin from "./components/Admin";
import Login from './components/Login';
import RegisterSuccess from './components/RegisterSuccess';
import AccountPage from './components/AccountPage';
import AccountUpdate from './components/AccountUpdate';

function App() {
  const [newItem, setItem] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("cart") === null) {
      localStorage.setItem("cart", "[]");
    }
  }, [])
  return (
    <Router>
      <div className="middleSmol container">
        <Switch>
          <Route path="/">
            <Navigation />
            <div className="row rowWidth">
              <div className="col-md-3 col-lg-2 productGroupsRow">
                <Route exact path={["/", "/catalog/:name", "/catalog/:category/:subcategory"]}>
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
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
              </Route>
              <Route path="/registrationsuccess">
              <RegisterSuccess />
            </Route>
            <Route path="/account/">
              <AccountPage />
            </Route>
            <Route path="/accountupdate">
              <AccountUpdate />
            </Route>
            <Route path="/info/">
              <InfoGroups />
            </Route>
            <Route path="/info/YhteystiedotSivu">
              <Contacts />
            </Route>
            <Route path="/Admin">
              <Admin />
            </Route>
            <Route path="/info/YritysMyynti">
              <YritysMyynti />
            </Route>
            <Route path="/product">
              <ProductPage isOpen={(value) => setItem(value)} isOpen2={(value) => setItem(value)} />
            </Route>
            <Route path="/info/service">
              <Service />
            </Route>
            <Route path="/info/ukk">
              <Ukk />
            </Route>
            <Route path="/info/tietosuoja">
              <Tietosuoja />
            </Route>
            <Route exact path={["/", "/catalog/:name", "/catalog/:category/:subcategory"]}>
              <ProductList isOpen={(value) => setItem(value)} isOpen2={(value) => setItem(value)} />
            </Route>
            <Route exact path="/">
              <BottomLinks />
              <Tietoja />
            </Route>
            <Footer />
            <Producers />
          </Route>
        </Switch>
      </div>
      <CartAlert isOpen={newItem} />
    </Router>
  );
}

export default App;