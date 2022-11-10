import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; //to dinamically change the css of every sub component of the card div
  return <div className={classes}>{props.children}</div>;
};
export default Card;
