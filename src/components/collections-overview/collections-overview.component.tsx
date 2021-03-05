import React from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "components/collection-preview/collection-preview.component";
import { useCollections } from "utils/redux/shop/shop.hooks";

const CollectionsOverview = () => {
  const  collections  = useCollections();
  return (
    <div className="collections-overview">
      {collections.map( ( { id, ...collection } ) => (
        <CollectionPreview key={id} {...collection}/>
      ) )}
    </div>
  );
};

export default CollectionsOverview;