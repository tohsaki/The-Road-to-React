import React from "react";

function Item({ item, onRemoveItem }) {
  const handleRemoveItem = () => {
    onRemoveItem(item);
  };

  return (
    <li>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span> {item.author}</span>
      <span> {item.num_comments} comment(s)</span>
      <span> {item.points} point(s)</span>
      <span>
        <button type="button" onClick={() => onRemoveItem(item)}>
          Dismiss
        </button>
      </span>
    </li>
  );
}

export default Item;
