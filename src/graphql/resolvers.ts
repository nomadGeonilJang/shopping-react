import { gql } from "@apollo/client";
import { addItemToCart } from "utils/redux/cart/cart.utils";

export const typeDefs = gql`
  extend type Item{
    quantity:Int
  }

  extend type Mutation{
    ToggleCartHidden:Boolean!
    AddItemToCart(item:Item!):[Item]!
  }
`;

export const GET_CART_HIDDEN = gql`
  {
    cartHidden @clients
  }
`;
export const GET_CART_ITEMS = gql`
  {
    cartItems @clients
  }
`;

export const resolvers = {
  Mutation: {
    toggleCartHidden: ( _root:any, _args:any, { cache }:any ) => {
      const { cartHidden } = cache.readQuery( {
        query: GET_CART_HIDDEN
      } );
      
      cache.writeQuery( {
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden }
      } );

      return !cartHidden;
    },
    addItemToCart: ( _root:any, { item }:any, { cache }:any ) => {
      const { cartItems } = cache.readQuery( {
        query: GET_CART_ITEMS
      } );

      const newCartItem = addItemToCart( cartItems, item );
      cache.writeQuery( {
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItem }
      } );

      return newCartItem;

    }
  },
};