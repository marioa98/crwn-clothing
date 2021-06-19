import React from "react";
import PropTypes from "prop-types";

import theme from "./Button.module.scss";

const Button = ({ children, ...props }) => (
  <button className={theme.button} {...props} >
    { children }
  </button>
)

Button.propTypes = {
  children: PropTypes.any,
  props: PropTypes.object
}

export default Button;