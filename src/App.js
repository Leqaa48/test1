import React, { Component } from "react";
import "./App.css";
import Card from "./component/card";
import Nav from './component/card'

function App() {
  const bar = [
    {
      id: 1,
      h3Value: "Flower",
      imgSrc: "/images/img-1.jpg",
      imgAlt: " Flower",
    },
    { id: 2, h3Value: "Sea", imgSrc: "/images/img-5.jpg", imgAlt: " Sea" },
    { id: 3, h3Value: "Car", imgSrc: "/images/img-9.jpg", imgAlt: " car" },
  ];

  return (
    <div className="App">
      <Nav />

    </div>
  );
}

export default App;
