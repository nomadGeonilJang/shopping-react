import React, { useEffect } from "react";
import { Route, useRouteMatch } from "react-router-dom";
import CollectionsOverview from "components/collections-overview/collections-overview.component";
import CollectionPage from "pages/collection/collection.component";
import WithSpinner from "components/with-spinner/with-spinner.component";
import { fetchCollectionsStartAsync } from "utils/redux/shop/shop.actions";
import { useFetchCollectionStartAsync, useisFetching } from "utils/redux/shop/shop.hooks";



const CollectionsOverviewWithSpinner = WithSpinner( CollectionsOverview );
const CollectionsPageWithSpinner = WithSpinner( CollectionPage );

const Shop = () => {
  const match = useRouteMatch();
  const isFetching = useisFetching();
  const fetchStart = useFetchCollectionStartAsync( fetchCollectionsStartAsync );
  
  useEffect( () => {
    fetchStart();
  }, [] );

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`}>
        <CollectionsOverviewWithSpinner isLoading={isFetching}/>
      </Route>
      <Route path={`${match.path}/:collectionId`}>
        <CollectionsPageWithSpinner isLoading={isFetching}/>
      </Route>
    </div>
  );
};

export default  Shop  ;