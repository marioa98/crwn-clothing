/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({ id, imageUrl, subtitle = "shop now", title, theme }) => (
  <div className={theme.menuItem} id={id}>
    <div className={theme.content}>
      <h1 className={theme.title}>{title}</h1>
      <span className={theme.subtitle}>{subtitle}</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.object
};

export default MenuItem;
