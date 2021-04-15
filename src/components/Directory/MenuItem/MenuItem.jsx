import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import theme from "./MenuItem.module.scss";

const MenuItem = ({
  history,
  id,
  imageUrl,
  linkUrl,
  match,
  size,
  subtitle = "shop now",
  title
}) => (
  <div
    className={`${size} ${theme.menuItem}`}
    id={id}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
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
  history: PropTypes.object,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  match: PropTypes.object,
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default withRouter(MenuItem);
