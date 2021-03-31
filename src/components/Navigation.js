import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/D5-uus.png";
import cart from "../img/cart.png";
import login from "../img/login.png";
import './navigation.css';

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
      <Navbar.Brand href="#home">
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
        <Nav.Link className="navCartAndLogin" href="#deets">
          <img
            src={login}
            width="38"
            height="38"
            className="d-inline-block align-top"
            alt="Log in"
          />
        </Nav.Link>
        <div className="navBarMain">
          <FormControl type="text" placeholder="Hae tuotteita ja valmistajia" className="mr-sm-2 navigationSearchInput" />
          <Button className="navigationSearchBtn" variant="outline-primary">Search</Button>
        </div>
        <Nav.Link className="navCartAndLogin" eventKey={2} href="#cart">
          <img
            src={cart}
            width="38"
            height="38"
            className="d-inline-block align-top"
            alt="Cart"
          />
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
