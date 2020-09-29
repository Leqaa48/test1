import React, { Component } from "react";
import "../App.css";

function Card(props) {
  return (
    <div className="contener-item">
      <h3 className="header">{props.h3Value}</h3>
      <img className="img" src={props.imgSrc} alt={props.imgAlt} />
    </div>
  );
}

export default Card;
