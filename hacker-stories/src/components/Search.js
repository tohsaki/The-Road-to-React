import React from "react";
import InputWithLabel from "./InputWithLabel";
import {StyledButtonLarge, StyledSearchForm} from "./StyledComponents"

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
      <StyledSearchForm onSubmit={handleSearchSubmit}>
        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={handleChange}
        >
          Search:
        </InputWithLabel>
        <StyledButtonLarge
          type="submit"
          disabled={!searchTerm}
        >
          Submit
        </StyledButtonLarge>
      </StyledSearchForm>

      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
