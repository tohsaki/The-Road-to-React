import React from "react";
import InputWithLabel from "./InputWithLabel";
import style from "../App.module.css";

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
      <form onSubmit={handleSearchSubmit} className={style.searchForm}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={handleChange}
        >
          Search:
        </InputWithLabel>
        <button
          type="submit"
          disabled={!searchTerm}
          className={`${style.button} ${style.buttonLarge}`}
        >
          Submit
        </button>
      </form>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
