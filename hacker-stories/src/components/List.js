import React from "react";

function Titles({ list }) {
  const Item = ({ item }) => {
    return (
      <li>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span> {item.author}</span>
        <span> {item.num_comments} comment(s)</span>
        <span> {item.points} point(s)</span>
      </li>
    );
  };

  return (
    <div>
      {console.log("List.rerurn()")}

      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </div>
  );
}

export default Titles;
