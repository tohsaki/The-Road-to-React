import React from "react";
import InputWithLabel from "./InputWithLabel";

export default function Search({ search: searchTerm, onSearch }) {
  const handleChange = (event) => {
    console.log(event.target.value);

    onSearch(event);
  };

  return (
    <div>
      {console.log("Search.rerurn()")}
      <InputWithLabel
        id="search"
        label="Search:"
        value={searchTerm}
        onInputChange={handleChange}
      />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
