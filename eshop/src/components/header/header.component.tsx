import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.config";
import { connect, useSelector, useDispatch } from "react-redux";
import { configOptions } from "final-form";
import { setCurrentUser } from "../../redux/user/user.actions";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { selectCartHidden } from "../../redux/cart/cart.selector";
// import { selectCurrentUser } from "../../redux/user/user.selector";
import { headerContent } from "../../redux/selector";

// interface IProps{
//     currentUser:any
// }

const Header: React.FC = () => {
  //   const currentUser = useSelector(selectCurrentUser);
  //   const cartHidden = useSelector(selectCartHidden);

  const currentUser = headerContent(useSelector((state) => state)).user;
  const cartHidden = headerContent(useSelector((state) => state)).cart;

  //const dispatch = useDispatch();
  console.log("from header");
  console.log(JSON.stringify(currentUser));
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut()
            }}
          >
            Signout
          </div>
        ) : (
          <Link className="option" to="/signin">
            Signin
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {cartHidden ? null : <CartDropdown></CartDropdown>}
    </div>
  );
};

// const mapStateToProps = (state:any) => ({
// currentUser:state.user.currentUser
// })
// export default connect(mapStateToProps)(Header);
export default Header;
