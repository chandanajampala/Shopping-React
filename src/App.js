import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartComponent from './components/cartComponent/CartComponent.js';
import HomeComponent from './components/homeComponent/HomeComponent.js';
function App() {
  return (

    <Container fluid="false">
    <Row>
      <Col><HomeComponent/></Col>
      <Col>2 of 3</Col>
      <Col><CartComponent/></Col>
    </Row>
  </Container>

  );
}

export default App;
