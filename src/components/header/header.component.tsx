import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "assets/crown.svg";
import "./header.styles.scss";

import { auth } from "utils/firebase/firebase.utils";

import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropDown from "components/cart-dropdown/cart-dropdown.component";
import { useUser } from "utils/redux/user/user.hooks";
import { useCart } from "utils/redux/cart/cart.hooks";



const Header = (  ) => {
  const { currentUser } = useUser();
  const { hidden } = useCart();
  
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
            onClick={() => auth.signOut()}
          >SIGN OUT</a> 
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {!hidden && <CartDropDown/>}
    </header>
  );

};


export default Header;