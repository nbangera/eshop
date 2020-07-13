import React, { useEffect, useContext, useState } from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch, Redirect } from "react-router-dom";
import { ShopPage } from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { SigninSignupPage } from "./pages/signin-singup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.config";
import { connect, useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { findAllByDisplayValue } from "@testing-library/react";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log(JSON.stringify(currentUser));
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // user ? setAuthUser(user)
      //         : setAuthUser(null);
      
      //sign-in
      if (user) {
        const userRef = await createUserProfileDocument(user);
        if (userRef) {
          userRef.onSnapshot((snapshot) => {
            var currentUser = { id: snapshot.id, ...snapshot.data() };
            //setCurrentUser()
            dispatch(setCurrentUser(currentUser));
            //console.log(JSON.stringify(currentUser));
          });
        } else {
        }
      }
      //sign-out
      else {
        dispatch(setCurrentUser(null));
      }

      //console.log(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninSignupPage />
          }
        />
      </Switch>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser:user=>dispatch(setCurrentUser(user))
// });
// export default connect(null,mapDispatchToProps)(App);
export default App;
