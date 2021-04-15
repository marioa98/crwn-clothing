import React from "react";
import PropTypes from "prop-types";

import theme from "./CollectionPreview.module.scss";
import CollectionItem from "../CollectionItem/CollectionItem";

const MAX_ITEMS = 4;

const CollectionPreview = ({ items = [], title }) => (
  <div className={theme.collectionPreview}>
    <div className={theme.title}>{title}</div>
    <div className={theme.preview}>
      {items
        .filter((_item, index) => index < MAX_ITEMS)
        .map(({ id, ...itemProps }) => (
          <CollectionItem key={id} id={id} {...itemProps} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
};

export default CollectionPreview;
