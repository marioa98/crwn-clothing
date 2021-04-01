import React from "react";
import PropTypes from "prop-types";

const MenuItem = ({menuItem = {}, theme}) => {
  const { title, subtitle = "shop now" } = menuItem;

  return (
    <div className={theme.menuItem}>
      <div className={theme.content}>
        <h1 className={theme.title}>{title}</h1>
        <span className={theme.subtitle}>{subtitle}</span>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  menuItem: PropTypes.object,
  theme: PropTypes.object
}

export default MenuItem