import React, { useContext } from "react";
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE } from "../utils/consts";

const Navbar = () => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={ SHOP_ROUTE }>Kjøpe en enhet</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Hjem</Nav.Link>
          <Nav.Link href="#features">Egenskaper</Nav.Link>
          <Nav.Link href="#pricing">Prisseting</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
};

export default Navbar