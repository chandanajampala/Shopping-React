import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CartComponent from './components/cartComponent/CartComponent.js';
import HomeComponent from './components/homeComponent/HomeComponent.js';
import ItemsListComponent from './components/itemsListComponent/ItemsListComponent.js';
function App() {
  return (

    <Container fluid="false">
    <Row>
      <Col><HomeComponent/></Col>
      <Col><ItemsListComponent/></Col>
      <Col><CartComponent/></Col>
    </Row>
  </Container>

  );
}

export default App;
