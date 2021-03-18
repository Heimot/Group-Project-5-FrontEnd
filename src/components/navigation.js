import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../img/D5_v3.png";
import cart from "../img/cart.png";

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
        <form action="/" method="get">
        <label htmlFor="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Hae tuotteita"
            name="s" 
        />
        <button type="submit">Hae</button>
    </form>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">
            Kirjaudu
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