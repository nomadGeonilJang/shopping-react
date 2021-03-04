import React from "react";
import "./collection-item.styles.scss";


import CustomButton from "components/custom-button/custom-button.component";
import { useAddItem } from "utils/redux/cart/cart.hooks";
import { CartItem } from "utils/redux/cart/cart.reducer";

type CollectionItem = {
  item: CartItem
}

const CollectionItem = ( { item } :CollectionItem ) => {
  const { id,  name, price, imageUrl } = item ;
  const addItem = useAddItem();

  return (
    <>
      <div className="collection-item" >
        <div className="image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="collection-footer">
          <span className="name">{id}{name}</span>
          <span className="price">{price}</span>
        </div>
        <CustomButton inverted onClick={() => {addItem( item );}}>Add to cart</CustomButton>
      </div>
    
    </>
  );
};

export default CollectionItem;