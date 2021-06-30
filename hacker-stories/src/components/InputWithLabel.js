import React from "react";

function InputWithLabel({ id, label, value, type = "text", onInputChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} />
    </div>
  );
}

export default InputWithLabel;
