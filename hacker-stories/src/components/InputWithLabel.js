import React, { useEffect, useRef } from "react";
import {StyledLabel, StyledInput} from "./StyledComponents"

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
      <StyledLabel htmlFor={id} >
        {children}
      </StyledLabel>
      &nbsp;
      <StyledInput
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
