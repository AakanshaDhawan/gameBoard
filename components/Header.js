import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Header(props) {
  return (
    <Navbar style={{backgroundColor:"white"}} expand="lg">
      <Link href="/" passHref>
        <img src="/images/logo.png" alt="logo" width="90px" />
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto header">
          <Link href="/" passHref>
            <Nav.Link className="header-menu">Home</Nav.Link>
          </Link>
          <Link href="/corporate_events" passHref>
            <Nav.Link className="header-menu">Corporate Events</Nav.Link>
          </Link>
          <Link href="/live_events" passHref>
            <Nav.Link className="header-menu">Live Events</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link className="header-menu">About</Nav.Link>
          </Link>
          <Link href="#contact" passHref>
            <Nav.Link className="header-menu">Contact</Nav.Link>
          </Link>
        </Nav>
        <Form inline>
          <span>
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                width: "50px",
                cursor: "pointer",
                color: "#000",
                marginLeft: "10px",
              }}
            />
          </span>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
