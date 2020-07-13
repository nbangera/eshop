import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/original.svg";
import "./header.styles.scss";
import { auth } from "../../firebase/firebase.config";
import { connect, useSelector, useDispatch } from "react-redux";
import { configOptions } from "final-form";
import { setCurrentUser } from "../../redux/user/user.actions";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

// interface IProps{
//     currentUser:any
// }

const Header: React.FC = () => {
  const currentUser = useSelector((state: any) => state.user.currentUser);
  const cartHidden = useSelector((state: any) => state.cart.hidden);
  //const [currentUser,setUser]  = useSelector((state: any) => state.user);
  //   useEffect(() => {
  //     //setUser();

  //   }, [])
  const dispatch = useDispatch();
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
        {currentUser? (
          <div
            className="option"
            onClick={() => {
              auth.signOut().then(() => {
                //dispatch(setCurrentUser(null));
              });
            }}
          >Signout</div>
        ):(
          <Link className="option" to="/signin">
            Signin
          </Link>
        )}
         <CartIcon></CartIcon>
      </div>
      {cartHidden?null:(<CartDropdown></CartDropdown>)}
      
    </div>
  );
};

// const mapStateToProps = (state:any) => ({
// currentUser:state.user.currentUser
// })
// export default connect(mapStateToProps)(Header);
export default Header;
