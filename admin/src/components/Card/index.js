import React from "react";
import { Card, FormControl } from "react-bootstrap";
import "./style.css";

function CartCard(props) {
  return (
    <Card className="cartCard mt-3 mb-3 " id={props.productId}>
      <Card.Img
        variant="top"
        className="cartCardImage"
        alt={props.name}
        src={props.image}
      />
      <Card.Body className="d-flex flex-column justify-content-between p-2">
        <Card.Title className="cartCardTitle text-uppercase">
          {" "}
          {props.name}{" "}
        </Card.Title>
        <div className="d-flex flex-row justify-content-around align-items-center p-1">
          <Card.Text className="cartCardPrice">₹ {props.price}</Card.Text>
          <Card.Text className="cartCardPrice">*</Card.Text>
          <FormControl
            className="cartCardQuantity"
            as="select"
            value={props.quantity}
            disabled
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </FormControl>
          <Card.Text className="cartCardPrice">=</Card.Text>
          <Card.Text className="cartCardPrice">
            ₹ {props.quantity * props.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartCard;
