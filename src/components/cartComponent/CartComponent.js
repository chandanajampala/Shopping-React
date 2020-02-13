import React from "react";
import Button from "react-bootstrap/Button";
import CartItem from "../cartItem/CartItem.js";
import "./CartComponent.css";
const CartComponent = props => {
     let cartItemList = (props.data && props.data.constructor === Array && props.data.length > 0)? props.data :'';
  return (
    <div>
      <h4>My Cart</h4>
     { cartItemList && (
        <div className="CartItems">
          <CartItem data={cartItemList} />
        </div>
      )}
      <Button variant="success">Checkout</Button>
    </div>
  );
};

export default CartComponent;

// props.data && props.data.constructor === Array && props.data.length > 0
