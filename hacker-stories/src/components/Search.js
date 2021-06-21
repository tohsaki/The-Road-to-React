import React, { useState } from "react";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    console.log(`searchTerm: ${searchTerm}`);
    setSearchTerm(event.target.value);

    props.onSearch(event)
  };

  return (
    <div>
      {console.log("Search.rerurn()")}
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
