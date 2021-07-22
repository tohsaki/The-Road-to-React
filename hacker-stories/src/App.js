import logo from "./logo.svg";
import "./App.css";
import SumAge from "./components/SumAge";
import List from "./components/List";
import JSClass from "./components/JSClass";
import Search from "./components/Search";
// import { useState, useEffect } from "react";
import useSemiPersistentState from "./components/useSemiPersistentState";
import { useEffect, useState, useReducer } from "react";
import { renderIntoDocument } from "react-dom/cjs/react-dom-test-utils.production.min";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(title) {
  return "Title: " + title;
}

function getName(person) {
  var name = `${person.firstName} ${person.lastName}`;
  return name;
}

const me = {
  firstName: "Buriburi",
  lastName: "Zaemon",
};

// (6)
const nameOfPerson = getName(me);

const stories_2 = [
  {
    title: "React_2",
    url: "https://reactjs.org/",
    author: "Jordan Walke_2",
    num_comments: 2,
    points: 2,
    objectID: 2,
  },
  {
    title: "Redux_2",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark_2",
    num_comments: 2,
    points: 2,
    objectID: 3,
  },
];

const API_ENDOPINT = "https://hn.algolia.com/api/v1/search?query=";

function App() {
  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "");

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

  useEffect(() => {
    if (!searchTerm) return;

    dispatchStories({ type: "STORIES_FETCH_INIT" });

    console.log("setIsLoading to true...");
    fetch(`${API_ENDOPINT}${searchTerm}`)
      .then((response) => response.json())
      .then((result) => {
        dispatchStories({
          type: "STORIES_FETCH_SUCCESS",
          payload: result.hits,
        });
      })
      .catch(() => dispatchStories({ type: "STORIES_FETCH_FAILURE" }));
  }, [searchTerm]);

  const handleSearch = (event) => {
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
      {console.log("App.rerurn()")}

      <h2>
        {welcome.greeting} {welcome.title}
      </h2>
      <h2>{getTitle("React")}</h2>
      <h3>{getName(me)}</h3>
      <Search search={searchTerm} onSearch={handleSearch} />
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
