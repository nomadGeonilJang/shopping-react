import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "components/collections-overview/collections-overview.component";
import CollectionPage from "pages/collection/collection.component";
import { firestore, convertCollectionsSnapshotToMap, ConvertCollectionsSnapshotToMap } from "utils/firebase/firebase.utils";
import {  useUpdateCollection } from "utils/redux/shop/shop.hooks";
import WithSpinner from "components/with-spinner/with-spinner.component";


const CollectionsOverviewWithSpinner = WithSpinner( CollectionsOverview );
const CollectionsPageWithSpinner = WithSpinner( CollectionPage );

const Shop = () => {
  const match = useRouteMatch();
  const [ loading, setLoading ] = React.useState( true ); 
  const updateCollections = useUpdateCollection();

  useEffect( () => {

    const collectionRef = firestore.collection( "collections" );
    const unsubscribeFromSnapshop = collectionRef.onSnapshot( async ( snapshot ) => {
      
      const collectionsMap = convertCollectionsSnapshotToMap( snapshot as unknown as ConvertCollectionsSnapshotToMap );
      updateCollections( collectionsMap );
      setLoading( false );

    } );
    return () => {
      unsubscribeFromSnapshop();
    };
    
  }, [] );

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverviewWithSpinner isLoading={loading}/>
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionsPageWithSpinner isLoading={loading}/>
      </Route>
    </div>
  );
};

export default  Shop  ;