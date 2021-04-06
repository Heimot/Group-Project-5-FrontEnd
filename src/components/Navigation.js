import { Nav, Navbar, NavDropdown, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/D5-uus.png";
import './navigation.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  let arr = [{ id: "1", ryhma: "Osat", underGroups: ["1", "2", "3"] }, { id: "2", ryhma: "Koneet", underGroups: ["4", "5", "6"] }, { id: "3", ryhma: "Lisätarvikkeet", underGroups: ["Hiiret", "Näppäimistöt"] }, { id: "4", ryhma: "Komponentit", underGroups: ["GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY", "GPU", "CPU", "EMOLEVY"] }, { id: "5", ryhma: "Näytöt" }, { id: "6", ryhma: "Gaming" }, { id: "7", ryhma: "TV ja video" }, { id: "8", ryhma: "Kamerat" }, { id: "9", ryhma: "Palvelut" }];

  function underGroups(ryhma, item) {
    let i = 0;
    let values = [];
    if (item) {
      for (i = 0; i < item.length; i++) {
        values.push(<NavDropdown.Item key={`${ryhma}/${item[i]}`} className="navDropItem" href={`/category/${ryhma}/${item[i]}`}>{item[i]}</NavDropdown.Item>);
      }
      return values;
    }
  }

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
          <FormControl type="text" placeholder="Hae tuotteita ja valmistajia" className="mr-sm-2 navigationSearchInput" />
          <Button className="navigationSearchBtn" variant="outline-primary">Search</Button>
        </div>
        <Nav.Link className="navCartAndLogin" href="#deets">
          <FontAwesomeIcon icon={faUserCircle} size="3x"/>
        </Nav.Link>
        <Nav.Link className="navCartAndLogin" eventKey={2} href="cart">
        <FontAwesomeIcon icon={faShoppingCart} size="3x"/>
        </Nav.Link>
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <div className="navCategories">
            {arr.map((item) => {
              return (
                <NavDropdown key={item.id} title={item.ryhma} id="collasible-nav-dropdown">
                  {underGroups(item.ryhma, item.underGroups)}
                </NavDropdown>
              )
            })
            }
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
