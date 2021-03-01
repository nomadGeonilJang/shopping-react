import React from "react";
import "./collection-item.styles.scss";

type CollectionItem = {
    id:number|string;
    name:string;
    price:string | number;
    imageUrl:string
}

const CollectionItem = ( { id, name, price, imageUrl } :CollectionItem ) => (
  <div className="collection-item">
    <div className="image"
      style={{
        backgroundImage:`url(${imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;