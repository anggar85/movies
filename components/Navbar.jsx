import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

/**
 * Holds the navigation of the application
 * Also includes the drawer to using on mobile version
 */
export default function NavbarC() {
  const [show, setShow] = useState( false );

  const toggleDrawer = () => setShow( !show );

  return (
    <Navbar bg="dark" expand="lg" sticky="top" className="p-0 shadow">
      <Container fluid>
        <FontAwesomeIcon
          icon={faBars}
          color="white"
          className="isCursor"
          size="2x"
          onClick={toggleDrawer}
        />
        <Navbar.Brand
          href="#"
          className="text-white d-flex align-items-center p-0"
        >
          <div className="p-2">Movies</div>
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "80px" }}
            navbarScroll
          ></Nav>
          <Link href="/library" passHref>
            <Nav.Link className="text-white">Library</Nav.Link>
          </Link>
          <Link href="/watched-movies" passHref>
            <Nav.Link className="text-white">Watched Movies</Nav.Link>
          </Link>
          <Link href="/watchlist" passHref>
            <Nav.Link className="text-white">Watchlist</Nav.Link>
          </Link>
        </Navbar.Collapse>
      </Container>
      <DrawerMenu show={show} toggleDrawer={toggleDrawer} />
    </Navbar>
  );
}


