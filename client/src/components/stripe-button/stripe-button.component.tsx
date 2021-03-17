import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ( { price }:{price:number} ) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IRVa0HAi5eQvToF9WlXjvoMlTKriaFTJ6WjG6vn6D5vxgdIxLjmNFZ6KXUX6Hr3JgBV7xjJk6TzYJcg9dSMNfIC00Yq9U0MoK';

  const onToken = ( token:any ) => {
    axios( {
      url: 'payment',
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    } )
      .then( response => {
        alert( "Payment success" );
      } )
      .catch( error => {
        //
        console.log( `Payment error ${JSON.stringify( error )}` );
        alert( `There was an issue with your payment` );
      } );
    
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="KING GI"
      billingAddress
      shippingAddress
      image='https://i.ibb.co/rt4BKYd/Illustration-of-crown-icon-on-white-background.jpg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;