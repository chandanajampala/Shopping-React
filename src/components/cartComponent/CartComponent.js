import React from "react";
import Media from "react-bootstrap/Media";
import Button from 'react-bootstrap/Button'
import IncrementDecrementButton from "../incrementDecrementButton/IncrementDecrementButton";
import './CartComponent.css'
function CartComponent() {
  return (
    <div>
      <h4>My Cart</h4>
      <div className  = "CartItems">
        <Media>
          <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="Product Name-img"
          />
          <Media.Body>
            <h5>Product Name</h5>
            <IncrementDecrementButton />
          </Media.Body>
        </Media>
      </div>
      
      <Button variant="success">Checkout</Button>
      
    </div>
  );
}

export default CartComponent;
