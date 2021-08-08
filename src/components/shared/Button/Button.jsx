import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import theme from "./Button.module.scss";

const Button = ({ children, isGoogle = false, ...props }) => (
  <button
    className={classNames(theme.button, {
      [theme.google]: isGoogle
    })}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.any,
  isGoogle: PropTypes.bool,
  props: PropTypes.object
};

export default Button;
