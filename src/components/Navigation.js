import { Nav, Navbar, NavDropdown, FormControl, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/D5-uus.png";
import './navigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useFetch from './hooks/fetch';

function Navigation({user}) {
  const [width, setwidth] = useState(getWidth())
  let category = useFetch('http://localhost/Group-Project-5-BackEnd/category.php', { method: "GET", headers: { 'Content-Type': 'application/json' } });
  let sub = useFetch('http://localhost/Group-Project-5-BackEnd/allsub.php', { method: "GET", headers: { 'Content-Type': 'application/json' } })

  function subCategories(id, ryhma) {
    if (sub) {
      let arr = [];
      let value2 = sub.filter(item => {
        return item.categoryID === id
      })
      value2.map(item => {
        arr.push(<NavDropdown.Item key={`${ryhma}/${item.name}`} className="navDropItem" href={`/category/${ryhma}/${item.name}`}>{item.name}</NavDropdown.Item>);
      })
      return (arr);
    }
  }

  function getWidth() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

  useEffect(() => {
    const handleResize = () => {
      setwidth(getWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={icon}
          width="120"
          height="60"
          className="d-inline-block align-top"
          alt="DigiFemma logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle className="navCategories" aria-controls="responsive-navbar-nav" />
      <div className="navBarMain">
        <div className="navBarMain">
          <FormControl name="form1" type="text" method="get" action="search.php" placeholder="Hae tuotteita ja valmistajia" className="mr-sm-2 navigationSearchInput" required/>
          <Button name="submit" className="navigationSearchBtn" variant="outline-primary">Search</Button>
        </div>
        <div className="name">
          {user ? user.firstName : ''}
        </div>
        <Nav.Link className="navCartAndLogin" href="/account">
          <FontAwesomeIcon icon={faUserCircle} size="3x" />
        </Nav.Link>
        <Nav.Link className="navCartAndLogin" eventKey={2} href="/cart">
          <FontAwesomeIcon icon={faShoppingCart} size="3x" />
        </Nav.Link>
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {width.width < 767 && category ?
            <div className="navCategories">
              {category.map((item) => {
                return (
                  <NavDropdown key={item.id} title={item.name} id="collasible-nav-dropdown">
                    {subCategories(item.id, item.name)}
                  </NavDropdown>
                )
              })
              }
            </div>
            : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
