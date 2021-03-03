import React from "react";
import "./collection-preview.styles.scss";

import CollectionItem from "components/collection-item/collection-item.component";

type Item = {
  id:number|string;
  name:string;
  price:string | number;
  imageUrl:string
}

type PreviewCollection = {
  title: string;
  items: Item[];
}


const CollectionPreview = ( { title, items }:PreviewCollection ) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .filter( ( _, idx ) => idx < 4 )
          .map( ( item ) => <CollectionItem key={item.id} {...item}/> )}
    </div>
  </div>
);

export default CollectionPreview;