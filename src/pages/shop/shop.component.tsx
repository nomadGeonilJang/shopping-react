import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionsOverview from "components/collections-overview/collections-overview.component";
import CollectionPage from "pages/collection/collection.component";

const Shop = () => {
  const match = useRouteMatch();

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