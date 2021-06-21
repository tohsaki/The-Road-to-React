import logo from "./logo.svg";
import "./App.css";
import SumAge from "./components/SumAge";
import List from "./components/List";
import JSClass from "./components/JSClass";
import Search from "./components/Search";
import { useState } from "react";

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
    objectID: 0,
  },
  {
    title: "Redux_2",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark_2",
    num_comments: 2,
    points: 2,
    objectID: 1,
  },
];

function App() {
  const stories_1 = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];



  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (event) => {
    console.log(`App.handleSearch: ${event.target.value}`)
    setSearchTerm(event.target.value)
    setTimeout(() => {console.log(`searchTerm in App.js: ${searchTerm}`)}, 1000)
    
  }

  const searchStories =  stories_1.filter((story) => {
    console.log(`searchTerm in App.js/stories_1.filter: ${searchTerm}`)
    return story.title.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="App">
      {console.log("App.rerurn()")}

      <h2>
        {welcome.greeting} {welcome.title}
      </h2>
      <h2>{getTitle("React")}</h2>
      <h3>{getName(me)}</h3>
      <Search onSearch={handleSearch}/>
      <br />
      <br />
      <ul>
        <List list={searchStories} />
      </ul>
      <hr />
      <ul>
        <List list={stories_2} />
      </ul>

      <JSClass />
    </div>
  );
}

export default App;
