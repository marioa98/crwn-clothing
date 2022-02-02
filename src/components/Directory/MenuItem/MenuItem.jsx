import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

import theme from "./MenuItem.module.scss";

const MenuItem = ({
  id,
  imageUrl,
  linkUrl,
  match,
  size,
  subtitle = "shop now",
  title
}) => {

  const navigate = useNavigate()
  return (
    <div
      className={`${size} ${theme.menuItem}`}
      id={id}
      onClick={() => navigate(`${match.url}${linkUrl}`)}
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
}

MenuItem.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  match: PropTypes.object,
  size: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string
};

export default MenuItem;
