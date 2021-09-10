import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selectors.js";

import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

const ShopPage = ({ collections }) => (
  <div>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToprops = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToprops)(ShopPage);
