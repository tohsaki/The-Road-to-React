import React from "react";

function InputWithLabel({ id, value, type = "text", onInputChange, children }) {
  return (
    <div>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </div>
  );
}

export default InputWithLabel;
