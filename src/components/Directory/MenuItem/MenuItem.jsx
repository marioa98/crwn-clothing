import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import theme from "./MenuItem.module.scss";

const MenuItem = ({ id, imageUrl, size, subtitle = "shop now", title }) => (
  <div
    className={classNames(theme.menuItem, {
      [theme.large]: size === "large"
    })}
    id={id}
  >
    <div
      className={theme.backgroundImage}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className={theme.content}>
      <h1 className={theme.title}>{title}</h1>
      <span className={theme.subtitle}>{subtitle}</span>
    </div>
  </div>
);

MenuItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default MenuItem;
