import React from "react";
import "./collections-overview.styles.scss";
import { gql, useQuery } from "@apollo/client";

import CollectionPreview from "components/collection-preview/collection-preview.component";
import { useCollections } from "utils/redux/shop/shop.hooks";

const GET_COLLECTIONS = gql`
  query{
    collections{
      id
      title
      items{
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverview = () => {
  const  collections  = useCollections();

  return (
    <div className="collections-overview">
      {collections?.map( ( { id, ...collection } ) => (
        <CollectionPreview key={id} {...collection}/>
      ) )}
    </div>
  );
};

export default CollectionsOverview;