import React from "react";
import '../App.css'

function Item({ item, onRemoveItem }) {
  return (
    <li className="item">
      <span style={{width: '40%'}}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={{width: '30%'}}> {item.author}</span>
      <span style={{width: '10%'}}> {item.num_comments} comment(s)</span>
      <span style={{width: '10%'}}> {item.points} point(s)</span>
      <span style={{width: '10%'}}>
        <button type="button" onClick={() => onRemoveItem(item)} className="button button_large">
          Dismiss
        </button>
      </span>
    </li>
  );
}

export default Item;
