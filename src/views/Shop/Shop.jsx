/* eslint-disable react/no-unused-state */
import React from "react";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import collections from "../../utils/defaults/collections";
import theme from "./Shop.module.scss";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections
    };
  }

  render() {
    const { collections: collectionItems } = this.state;
    return (
      <div className={theme.container}>
        {collectionItems.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default Shop;
