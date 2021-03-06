import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "components/collections-overview/collections-overview.component";
import CollectionPage from "pages/collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap, ConvertCollectionsSnapshotToMap } from "utils/firebase/firebase.utils";
import {  useUpdateCollection } from "utils/redux/shop/shop.hooks";

const Shop = () => {
  const match = useRouteMatch();
  const updateCollections = useUpdateCollection();

  useEffect( () => {

    const collectionRef = firestore.collection( "collections" );
    collectionRef.onSnapshot( async ( snapshot ) => {
      
      const collectionsMap = convertCollectionsSnapshotToMap( snapshot as unknown as ConvertCollectionsSnapshotToMap );
      updateCollections( collectionsMap );

    } );
    // return () => {

    // };
    //
  }, [] );

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverview/>
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionPage/>
      </Route>
    </div>
  );
};

export default Shop;