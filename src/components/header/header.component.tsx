import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "assets/crown.svg";
import "./header.styles.scss";

import { auth } from "utils/firebase/firebase.utils";

type User = {
  displayname:string
}

const Header = ( { currentUser }:{currentUser:User} ) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"/>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
              SHOP
        </Link>
        <Link className="option" to="/shop">
              CONTACT
        </Link>
        { currentUser ? ( 
          <a className="option"
            onClick={()=>auth.signOut()}
          >SIGN OUT</a> 
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </header>
  );

};


export default Header;