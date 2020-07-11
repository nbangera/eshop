import React,{useEffect,useContext,useState} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch} from 'react-router-dom'
import { ShopPage } from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SigninSignupPage } from './pages/signin-singup/signin-signup.component';
import { auth,createUserProfileDocument } from './firebase/firebase.config';

function App() {

  const [userInfo,setAuthUser] = useState(null);

  useEffect(() => {    
    const unsubscribe  =  auth.onAuthStateChanged(async user=>{
      user ? setAuthUser(user)
              : setAuthUser(null);
      debugger;
       const userRef =  await createUserProfileDocument(user);
       if(userRef) {
        userRef.onSnapshot(snapshot=>{
          var currentUser = {id:snapshot.id,...snapshot.data()}
          setAuthUser(currentUser);
          console.log(JSON.stringify(currentUser));
        })
       }
       else{

       }
       
      //console.log(user);
    })
    
    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <div>
      <Header currentUser={userInfo} ></Header>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/signin' component={SigninSignupPage}></Route>
      </Switch>     
    </div>
  );
}

export default App;
