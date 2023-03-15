import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  return (
    <div>
      <Navbar fixed="top" variant="dark" bg="transparent" expand="lg">
        <Container fluid>
          <img src="splash logo 1.png" alt="" height={"80px"} />
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Deals</Nav.Link>
              <Nav.Link href="#action2">Shop by brands</Nav.Link>

              <NavDropdown title="Shop" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Shop</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">Order tracking</Nav.Link>
              <Nav.Link href="#" disabled>
                {/* Link */}
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Button variant="btn bg-transparent">
                <i className="fas fa-search" style={{ color: "white" }}></i>
              </Button>
              <Button variant="btn btn-danger outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
