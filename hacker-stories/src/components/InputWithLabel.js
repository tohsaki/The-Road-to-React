import React, { useEffect, useRef } from "react";

function InputWithLabel({
  id,
  value,
  type = "text",
  isFocused,
  onInputChange,
  children,
}) {
  const inputRef = useRef();

  useEffect(() => {
    console.log(`isFocused: ${isFocused}`);
    console.log(`inputRef.current: ${inputRef.current}`);
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </div>
  );
}

export default InputWithLabel;
