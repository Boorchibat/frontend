import React from "react";
import "./Button.css";

export const Button = (props) => {
  const { children, ...rest } = props;
  return (
    <div>
      <button id="btn" {...rest}>
        {children}
      </button>
    </div>
  );
};