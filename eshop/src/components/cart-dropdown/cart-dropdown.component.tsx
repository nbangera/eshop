import React from "react";
import "./cart-dropdown.styles.scss";
import { CustomButton } from "../common/controls/button/button.component";
import { useSelector,useDispatch } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { cartContent } from "../../redux/selector";
import { useHistory } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = () => {
  //const cartItems = useSelector(selectCartItems);
  const cartItems = cartContent(useSelector(state=>state)).cartItems;
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <div className="cart-dropdown">
      <div className="cart-items">

        {cartItems.length? (cartItems.map((item:any) => (
          <CartItem key={item.id}
            price={item.price}
            imageUrl={item.imageUrl}
            name={item.name}
            quantity={item.quantity}
          ></CartItem>
        ))):(<span className='empty-message'> Your cart is empty</span>)}
      </div>
      <CustomButton type="button" isGoogleSignIn={false} inverted={false} onClick={
          ()=>{
              dispatch(toggleCartHidden());
              history.push('/checkout');
              
          }
          } >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};
export default CartDropdown;
