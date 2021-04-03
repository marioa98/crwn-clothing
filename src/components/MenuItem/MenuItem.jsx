import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const MenuItem = ({
  id,
  imageUrl,
  size,
  subtitle = "shop now",
  title,
  theme
}) => (
  <div className={theme.menuItem} id={id}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
      className={classNames(theme.backgroundImage, {
        [theme.large]: size === "large"
      })}
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
  title: PropTypes.string,
  theme: PropTypes.object
};

export default MenuItem;
