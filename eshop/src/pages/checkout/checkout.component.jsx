import React from "react";
import "./checkout.styles.scss";
import { cartContent } from "../../redux/selector";
import { useSelector } from "react-redux";
import CheckoutItem from "./checkout-item.component";

const CheckoutPage = () => {
  const cartItems = cartContent(useSelector((state) => state)).cartItems;
  const totalPrice = cartContent(useSelector((state) => state)).totalPrice;

  return (
    <div className="checkout-page">
      <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>
      ))}
      <div className="total">
        <span>Total : ${totalPrice}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
