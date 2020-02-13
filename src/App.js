import React, { Component } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CartComponent from "./components/cartComponent/CartComponent.js";
import HomeComponent from "./components/homeComponent/HomeComponent.js";
import ItemsListComponent from "./components/itemsListComponent/ItemsListComponent.js";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cartData: [],
    };
  }
  changeData = (st) => {
        this.state.cartData.push(st)
         this.setState({ cartData:this.state.cartData});
  }
  render() {
    return (
      <Container fluid="false">
      <Row>{this.state.data}</Row>
        <Row>
          <Col>
            <HomeComponent />
          </Col>
          <Col>
            <ItemsListComponent addToCart={this.changeData}/>
          </Col>
          <Col>
            <CartComponent data={this.state.cartData}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
