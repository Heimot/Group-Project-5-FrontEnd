import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/D5-uus.png";
import cart from "../img/cart.png";
import login from "../img/login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
          </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
          </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Form inline>
            <FormControl type="text" placeholder="Hae tuotteita tai valmistajia" className="mr-sm-3" />
            <Button className="nappi">Hae</Button>
          </Form>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            <img
              src={login}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Log in"
            />
          </Nav.Link>
          <Nav.Link eventKey={2} href="#cart">
            <img
              src={cart}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="Cart"
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;
