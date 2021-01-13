import React, { useEffect } from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import { useStateValue } from "./Stateprovider";
import { auth } from './firebase';



function App() {
  const [{ cart },dispatch] = useStateValue();
  useEffect( () => {
    const unsubscribe=
    auth.onAuthStateChanged((authuser) => {
      if(authuser) {
        dispatch({
          type:"SET_USER",
          user: authuser,
        });
      }else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  },[]);

  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path="/checkout">
    <Header />
    <Checkout />
    </Route>
    <Route path="/login">
   <Login />
       </Route>
      <Route path="/">
      <Header />
      <Home />
      </Route> 
    </Switch>
    </div>
    </Router>
  );
}             

export default App;
