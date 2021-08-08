import "./App.css";
import List from "./components/List";
import JSClass from "./components/JSClass";
import Search from "./components/Search";
import useSemiPersistentState from "./components/useSemiPersistentState";
import { useEffect, useCallback, useReducer, useState } from "react";
import axios from "axios";

function getTitle(title) {
  return "Title: " + title;
}

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);
  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };

  const storiesReducer = (state, action) => {
    switch (action.type) {
      case "STORIES_FETCH_INIT":
        return { ...state, isLoding: true, isError: false };
      case "STORIES_FETCH_SUCCESS":
        return {
          ...state,
          isLoding: false,
          isError: false,
          data: action.payload,
        };
      case "STORIES_FETCH_FAILURE":
        return { ...state, isLoding: false, isError: true };
      case "REMOVE_STORIES":
        return {
          ...state,
          data: state.data.filter(
            (story) => action.payload.objectID !== story.objectID
          ),
        };
      default:
        throw new Error();
    }
  };
  const [stories, dispatchStories] = useReducer(storiesReducer, {
    data: [],
    isLoding: false,
    isError: false,
  });

  const handleStories = useCallback(() => {
    if (!searchTerm) return;

    dispatchStories({ type: "STORIES_FETCH_INIT" });

    console.log("setIsLoading to true...");
    axios
      .get(url)
      .then((result) => {
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: result.data.hits,
        });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, [url]);

  useEffect(() => {
    console.log("useEffect is called.");
    handleStories();
  }, [handleStories]);

  const handleSearchInput = (event) => {
    console.log(`App.handleSearch: ${event.target.value}`);
    setSearchTerm(event.target.value);
    setTimeout(() => {
      console.log(`searchTerm in App.js: ${searchTerm}`);
    }, 1000);
  };

  const handleRemoveStory = (item) => {
    dispatchStories({ type: "REMOVE_STORIES", payload: item });
  };

  return (
    <div className="App">
      <h2>{getTitle("React")}</h2>
      <Search
        search={searchTerm}
        onSearch={handleSearchInput}
        onSubmit={handleSearchSubmit}
      />
      <br />
      <br />
      {stories.isError && <p>Something went wrong!</p>}
      <ul>
        {stories.isLoding ? (
          <p>Loading...{console.log("Loading...")}</p>
        ) : (
          <List list={stories.data} onRemoveItem={handleRemoveStory} />
        )}
      </ul>

      <JSClass />
    </div>
  );
}

export default App;
