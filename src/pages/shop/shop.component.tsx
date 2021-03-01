import React, { useState }from "react";

import SHOP_DATA from "constants/shop.data";
import CollectionPreview from "components/collection-preview/collection-preview.component";


const Shop = () =>{
  const [ collection ] = useState( SHOP_DATA );


  return (
    <div className="shop-page">
      {collection.map( ( { id, ...collection } ) => (
        <CollectionPreview key={id} {...collection}/>
      ) )}
    </div>
  );
};

export default Shop;