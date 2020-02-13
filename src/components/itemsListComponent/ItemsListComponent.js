import React, { Component } from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
class ItemsListComponent extends Component{
    // constructor(props){
    //     super(props);

    // }

    render(){
        return(
<div>
    <h4>Selected Type Items</h4>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" alt = "productName-img" />
  <Card.Body>
    <Card.Title>Product Name</Card.Title>
    <Card.Text>
      Product description
    </Card.Text>
    <Button variant="primary"onClick = {() =>this.props.addToCart("obj")}>Add to cart</Button>
  </Card.Body>
</Card>
</div>
        );
    }
}

export default ItemsListComponent;