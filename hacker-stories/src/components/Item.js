import React from "react";
import {
  StyledItem,
  StyledColumn,
  StyledButtonSmall,
} from "./StyledComponents";
import { ReactComponent as Check } from "./check.svg";

function Item({ item, onRemoveItem }) {
  return (
    <StyledItem>
      <StyledColumn style={{ width: "40%" }}>
        <a href={item.url}>{item.title}</a>
      </StyledColumn>
      <StyledColumn style={{ width: "30%" }}> {item.author}</StyledColumn>
      <StyledColumn style={{ width: "10%" }}>
        {" "}
        {item.num_comments} comment(s)
      </StyledColumn>
      <StyledColumn style={{ width: "10%" }}>
        {" "}
        {item.points} point(s)
      </StyledColumn>
      <StyledColumn style={{ width: "10%" }}>
        <StyledButtonSmall type="button" onClick={() => onRemoveItem(item)}>
          <Check height="18px" width="18px" />
        </StyledButtonSmall>
      </StyledColumn>
    </StyledItem>
  );
}

export default Item;
