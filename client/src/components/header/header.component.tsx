import React from "react";
import { ReactComponent as Logo } from "assets/crown.svg";
import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropDown from "components/cart-dropdown/cart-dropdown.component";
import { useSignOut, useUser } from "utils/redux/user/user.hooks";
import { useCart } from "utils/redux/cart/cart.hooks";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "components/header/header.styles";

const Header = (  ) => {
  const { currentUser } = useUser();
  const { hidden } = useCart();
  const signOut = useSignOut();


  return (
    <HeaderContainer >
      <LogoContainer to="/">
        <Logo className="logo"/>
      </LogoContainer>
      <OptionsContainer >
        <OptionLink to="/shop">
              SHOP
        </OptionLink>
        <OptionLink  to="/shop">
              CONTACT
        </OptionLink>
        { currentUser ? ( 
          <OptionLink as="a"
            onClick={() => signOut()}
          >SIGN OUT</OptionLink> 
        ) : (
          <OptionLink  to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon/>
      </OptionsContainer>
      {!hidden && <CartDropDown/>}
    </HeaderContainer>
  );

};


export default Header;