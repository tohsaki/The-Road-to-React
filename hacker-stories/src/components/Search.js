import React from "react";
import InputWithLabel from "./InputWithLabel";

export default function Search({
  search: searchTerm,
  onSearch,
  onSubmit: handleSearchSubmit,
}) {
  const handleChange = (event) => {
    console.log(event.target.value);

    onSearch(event);
  };

  return (
    <div>
      {console.log("Search.rerurn()")}
      <InputWithLabel
        id="search"
        value={searchTerm}
        isFocused
        onInputChange={handleChange}
      >
        Search:
      </InputWithLabel>
      <button type="button" disabled={!searchTerm} onClick={handleSearchSubmit}>
        Submit
      </button>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
