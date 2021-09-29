import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import theme from "./Input.module.scss";

const Input = ({ label, onChange, value = "", ...props }) => (
  <div className={theme.inputContainer}>
    <input
      className={theme.input}
      onChange={onChange}
      value={value}
      {...props}
    />
    {label && (
      <label
        className={classNames(theme.inputLabel, {
          [theme.shrink]: !!value?.length
        })}
      >
        {label}
      </label>
    )}
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  props: PropTypes.object
};

export default Input;
