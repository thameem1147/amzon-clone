import React, { useState } from 'react';
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';

function Login() {
    const history = useHistory();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const signin = (e) => {
        e.preventDefault();
        auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
    };
    const register = (e) => {
        e.preventDefault();
        auth
        .createUserEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/");
        })
        .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
        <Link to="/">
            <img className="login__logo" src="https://milehighcre.com/wp-content/uploads/2017/10/Amazon.jpg" alt=""/>
            </Link>       
       
        <div className="login__container">
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" onChange=
                {event => setemail(event.target.value)} value={email}/>
                <h5>Password</h5>
                <input type="password" onChange={event => setpassword(event.target.value)} value={password}/>
                <button className="login__signin" onClick={signin} type="submit">Sign In</button>
            </form>
            <p>
                By signing in you agree to Amazon's conditions of use & sale,please see our privacy plolicy
            </p>
            <button className="login__register" onClick={register}>Create your amazon Account</button>
        </div>
        </div>
    )
}

export default Login;
