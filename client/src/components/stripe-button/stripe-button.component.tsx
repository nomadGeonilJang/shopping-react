import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ( { price }:{price:number} ) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IRVa0HAi5eQvToF9WlXjvoMlTKriaFTJ6WjG6vn6D5vxgdIxLjmNFZ6KXUX6Hr3JgBV7xjJk6TzYJcg9dSMNfIC00Yq9U0MoK';

  const onToken = ( token:any ) => {
    console.log( token );
    alert( "Payment Successful" );
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