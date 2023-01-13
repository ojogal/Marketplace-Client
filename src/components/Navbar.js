import React, { useContext } from "react";
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={ SHOP_ROUTE }>Kjøpe en enhet</Navbar.Brand>
        { user.isAuth ? 
        <Nav className="ml-auto">
          <Nav.Link href="#home">Admin</Nav.Link>
          <Nav.Link href="#features">Tast inn</Nav.Link>
        </Nav>
        :
        <Nav className="ml-auto">
          <Nav.Link href="#home">Autorisasjon</Nav.Link>
        </Nav>
        }
      </Container>
    </Navbar>
  )
});

export default NavBar