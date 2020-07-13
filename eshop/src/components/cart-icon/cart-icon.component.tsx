import React, { Dispatch } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect, useDispatch } from "react-redux";

const CartIcon =() => {
    const dispatch = useDispatch();
    return (
 <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">0</span>    
    </div>
)}

export default CartIcon;


// const mapDispatchToProps = (dispatch:Dispatch<any>) => ({
//     toggleCartHidden:()=>dispatch(toggleCartHidden())
// })

// export default connect(null,mapDispatchToProps)(CartIcon);
