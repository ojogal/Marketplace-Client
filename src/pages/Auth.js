import React from "react";
import { Container, Form } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom"
import Card from "react-bootstrap/Card";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <Container 
      className='d-flex justify-content-center align-items-center'
      style={{ height: window.innerHeight - 54 }}
      >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{ isLogin ? "Autorisasjon" : "Registrering" }</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="ml-2"
            placeholder="Skriv inn e-posten din"
          />
          <Form.Control
            className="ml-2"
            placeholder="Skriv inn passord"
          />
          <Row>
            { isLogin ?
              <div className="d-flex justify-content-between ml-3 pl-3 pr-3">
                <NavLink to={ REGISTRATION_ROUTE }>Registrering</NavLink>
              </div>
              :
              <div className="d-flex justify-content-between ml-3 pl-3 pr-3">
                <NavLink to={ REGISTRATION_ROUTE }>Tast inn</NavLink>
              </div>
            }
            <Button
              variant={ "outline-success" }
              >
              { isLogin ? 'Tast inn' : 'Registrering' }
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;