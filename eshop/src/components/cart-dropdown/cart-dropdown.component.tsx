import React from 'react'
import './cart-dropdown.styles.scss'
import { CustomButton } from '../common/controls/button/button.component'


const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton type="button" isGoogleSignIn={false} inverted={false}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}
 export default CartDropdown;
