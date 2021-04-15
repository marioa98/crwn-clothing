import React from "react";
import PropTypes from "prop-types";

import theme from "./CollectionPreview.module.scss";

const MAX_ITEMS = 4;

const CollectionPreview = ({ items = [], title }) =>  (
  <div className={theme.collectionPreview} >
    <div className={theme.title}>{title}</div>
    <div className={theme.preview}>
      {
        items.filter((_item, index) => index < MAX_ITEMS).map((item) => {
          const { id, name } = item;
          return <div key={id}>{name}</div>
        })
      }
    </div>
  </div>
)

CollectionPreview.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string
}

export default CollectionPreview