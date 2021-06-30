import React from "react";

export default function Search({ search, onSearch }) {
  const handleChange = (event) => {
    console.log(event.target.value);

    onSearch(event);
  };

  return (
    <div>
      {console.log("Search.rerurn()")}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} value={search} />
      <p>
        Searching for <strong>{search}</strong>
      </p>
    </div>
  );
}
