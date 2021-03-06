import React, { useEffect } from "react";
import { Redirect, useRouteMatch } from "react-router-dom";
import "./collection.styles.scss";

import CollectionItem from "components/collection-item/collection-item.component";
import {  CollectionID, useSelectCollectionWithCollectionId } from "utils/redux/shop/shop.hooks";
import { firestore } from "utils/firebase/firebase.utils";

const CollectionPage = () => {
  const { params } = useRouteMatch<{collectionId:CollectionID}>();
  const collection = useSelectCollectionWithCollectionId( params.collectionId );

  if( !collection ){
    return <Redirect to = "/"/>;
  }

  const { title, items } = collection;

  useEffect( () => {
    const unSubscribFromCollections = firestore
      .collection( 'collections' )
      .onSnapshot( snap => console.log( snap ) );
    return () => {
      unSubscribFromCollections();
    };
  }, [] );

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