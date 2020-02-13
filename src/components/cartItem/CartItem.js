import React from "react";
import "./CartItem.css";
import Media from "react-bootstrap/Media";
import IncrementDecrementButton from "../incrementDecrementButton/IncrementDecrementButton.js";
const CartItem = (props) => {

          let data = props.data;

    return(
        data.map((item) =>
        <Media className="Cart">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="holder.js/64x64"
            alt="ProductName-img"
          />
          <Media.Body>
            <h5>{item}</h5>
            <IncrementDecrementButton />
          </Media.Body>
        </Media>
)
    )
}



export default CartItem;