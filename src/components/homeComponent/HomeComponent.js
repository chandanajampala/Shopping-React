import React, { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup'
class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        active : true,
        disabled : true,
    };
  }


  change = () => {
    if(this.state.active)
         this.setState({ active: false });
    else
       this.setState({ active: true });       
  }
  render() {
    return (
      <div>
        <h4>Home</h4>
        <div>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active={this.state.active} onClick={this.change}>type 1</ListGroup.Item>
            <ListGroup.Item as="li" disabled = {this.state.disabled}>type 2</ListGroup.Item>
            <ListGroup.Item as="li">type 3</ListGroup.Item>
            <ListGroup.Item as="li">type 4</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  } 
}

export default HomeComponent;
