import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "../../Stateprovider";
import { auth } from '../../firebase';


function Header() {
const [{ cart , user}] = useStateValue();
const login = () => {
  if (user) {
    auth.signOut();
  }
}

    return (
        <div className="header">
        <Link to="/">
        <img className="header__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFd2IpFYuJYKR6wZ6rhLNsuO9Zi1TChbgdLw&usqp=CAU"
            alt="logo"
        />
        </Link>
        <div className="header__textandicon">
        <input className="header__text" placeholder="search" type="text"></input>
        <SearchIcon className="header__searchicon"/>
         </div>
           <div className="header__navi">
             <Link to={!user &&"/login"} className="header__link">
                <div onClick={login} className="header__span">
                <span className="header__span1">hello {user?.email}</span>
                <span className="header__span2">{user ? "Sign Out" : "Sign in"}</span>
                </div>
             </Link>
              <Link to="/" className="header__link">
                <div className="header__span">
                <span className="header__span1">return</span>
                <span className="header__span2">& order</span>
                </div>
              </Link>
            <Link to="/" className="header__link">
                 <div className="header__span">
                <span className="header__span1">your</span>
                <span className="header__span2">prime</span>
                </div>
             </Link>
             <Link to="/checkout" className="header__link">
             <div className="header__checkout">
               <ShoppingCartIcon className="header__cheackout__icon"/>
               <span className="header__span2 header__span__none">{cart?.length}</span>
               </div>
             </Link>
            </div>
        </div>

    )
}

export default Header;
