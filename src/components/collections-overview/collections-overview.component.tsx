import React from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "components/collection-preview/collection-preview.component";
import { useShop } from "utils/redux/shop/shop.hooks";

const CollectionsOverview = () => {
  const { collections } = useShop();
  return (
    <div className="collections-overview">
      {collections.map( ( { id, ...collection } ) => (
        <CollectionPreview key={id} {...collection}/>
      ) )}
    </div>
  );
};

export default CollectionsOverview;