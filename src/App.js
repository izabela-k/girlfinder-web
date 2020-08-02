import React from 'react';
import {
  Nav,
  Navbar,
  Container,
  Jumbotron,
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

import './App.css';
import { MobileShopButton } from "./components/mobile-shop-button";

function App() {
  return (
    <div>
      <Navbar variant="light">
        <Container>
          <Navbar.Brand href="https://les-finder.com" className="landing-brand">Les-finder.com</Navbar.Brand>
          <Nav className="ml-auto top-nav">
            {/*<Nav.Link href="/help/">Help</Nav.Link>*/}
          </Nav>
        </Container>
      </Navbar>
      <Jumbotron className="landing-jumbotron">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={8} lg={6} xl={5} className="landing-login-form">
              <h2 className="landing-form-header mb-4">Find a girlfriend,<br/>fall in love️</h2>
              <Form>
                <Form.Group as={Row} controlId="formBasicEmail">
                  <Form.Label column className="landing-form-label" sm="4" xs="3">E-mail</Form.Label>
                  <Col sm="7" xs="9">
                    <Form.Control type="email" placeholder=""/>
                    <Form.Text className="text-muted">
                      Enter your email address
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPassword">
                  <Form.Label column className="landing-form-label" sm="4" xs="3">Password</Form.Label>
                  <Col sm="7" xs="9">
                    <Form.Control type="password" placeholder=""/>
                    <Form.Text className="text-muted">
                      Help text for password field.
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-center">
                  <Col sm="8" xs={12}>
                    <Button block type="submit" variant="get-started">Get started</Button>
                  </Col>
                </Form.Group>
                <hr/>
                <Form.Group as={Row} className="justify-content-center">
                  <Col sm="8" xs={12}>
                    <Button block type="submit" variant="google">Sign in with Google</Button>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="justify-content-center">
                  <Col sm="8">
                    <Button block type="submit" variant="facebook">Sign in with Facebook</Button>
                  </Col>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="py-3">
        <h2 className="text-center mb-4">Get the mobile app!</h2>
        <Row className="justify-content-center mb-5">
          <MobileShopButton variant="apple"/>
          <MobileShopButton variant="google"/>
        </Row>
      </Container>
      <footer className="py-3 fixed-bottom bg-dark text-white">
        <div className="container">&copy; 2020 Les-finder.com</div>
      </footer>
    </div>
  );
}

export default App;
