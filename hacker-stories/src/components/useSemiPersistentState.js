import React, { useState, useEffect } from "react";

const useSemiPersistentState = (key, initialState) => {
  const isMounter = React.useRef(false);

  const [value, setValue] = useState(localStorage.getItem(key) || initialState);

  useEffect(() => {
    if (!isMounter.current) {
      isMounter.current = true;
    } else {
      console.log("useSemiPersistentState.useEffect");
      localStorage.setItem(key, value);
    }
  }, [value, key]);
  return [value, setValue];
};

export default useSemiPersistentState;
