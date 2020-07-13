import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../common/controls/button/button.component";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item:any) => (
          <CartItem key={item.id}
            price={item.price}
            imageUrl={item.imageUrl}
            name={item.name}
            quantity={item.quantity}
          ></CartItem>
        ))}
      </div>
      <CustomButton type="button" isGoogleSignIn={false} inverted={false}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
export default CartDropdown;
