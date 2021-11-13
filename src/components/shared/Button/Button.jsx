import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import theme from "./Button.module.scss";

const Button = ({ children, isGoogle = false, inverted, ...props }) => (
  <button
    className={classNames(theme.button, {
      [theme.google]: isGoogle,
      [theme.inverted]: inverted
    })}
    {...props}
  >
    {children} 
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  isGoogle: PropTypes.bool,
  inverted: PropTypes.bool,
  props: PropTypes.object
};

export default Button;
