import React from "react";
import Item from "./Item";

function Titles({ list, onRemoveItem }) {
  return (
    <div>
      {console.log("List.rerurn()")}

      {list.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
}

export default Titles;
