import React, { useContext } from "react";
import { ReactComponent as Logo } from "assets/crown.svg";
import CartIcon from "components/cart-icon/cart-icon.component";
import CartDropDown from "components/cart-dropdown/cart-dropdown.component";
import { useSignOut, useUser } from "utils/redux/user/user.hooks";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "components/header/header.styles";
import { CartContext } from "providers/cart/cart.provider"; 
import { useQuery, useMutation, gql } from "@apollo/client";
import { GET_CART_HIDDEN } from "graphql/resolvers";

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden{
    toggleCartHidden @client
  }
`;

const Header = (  ) => {
  const { currentUser } = useUser();

  const { hidden } = useContext( CartContext );

  const signOut = useSignOut();

  const { data, refetch } = useQuery( GET_CART_HIDDEN );
  const [ toggle, allData ] = useMutation( TOGGLE_CART_HIDDEN );
  const onToggle = () => {
    toggle();
  };


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