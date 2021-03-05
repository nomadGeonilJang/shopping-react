import React, { useState }from "react";

import SHOP_DATA from "utils/redux/shop/shop.data";
import CollectionPreview from "components/collection-preview/collection-preview.component";
import { useShop } from "utils/redux/shop/shop.hooks";


const Shop = () => {
  const { collections } = useShop();
  return (
    <div className="shop-page">
      {collections.map( ( { id, ...collection } ) => (
        <CollectionPreview key={id} {...collection}/>
      ) )}
    </div>
  );
};

export default Shop;