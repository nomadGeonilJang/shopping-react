import React from "react";
import "./collection.styles.scss";

import CollectionItem from "components/collection-item/collection-item.component";
import { Redirect, useRouteMatch } from "react-router-dom";
import {  CollectionID, useSelectCollectionWithCollectionId } from "utils/redux/shop/shop.hooks";

const CollectionPage = () => {
  const { params } = useRouteMatch<{collectionId:CollectionID}>();
  const collection = useSelectCollectionWithCollectionId( params.collectionId );

  if( !collection ){
    return <Redirect to = "/"/>;
  }

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map( item => <CollectionItem key={item.id} item={item}/> )}
      </div>
    </div>
  );

};

export default CollectionPage;