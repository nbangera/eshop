import React, { Dispatch } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectCartItemCount } from "../../redux/cart/cart.selector";

const CartIcon =() => {
    const dispatch = useDispatch();
    const itemCount = useSelector(selectCartItemCount);
    return (
 <div className="cart-icon" onClick={()=>dispatch(toggleCartHidden())}>
    <ShoppingIcon className="shopping-icon"></ShoppingIcon>
    <span className="item-count">{itemCount}</span>    
    </div>
)}

export default CartIcon;


// const mapDispatchToProps = (dispatch:Dispatch<any>) => ({
//     toggleCartHidden:()=>dispatch(toggleCartHidden())
// })

// export default connect(null,mapDispatchToProps)(CartIcon);
