import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "./Card";
import Aray from "./Aray";

ReactDOM.render(
  <>
    <App />
    <Card
      imgsrc={Aray[0].imgsrc}
      title={Aray[0].title}
      button={Aray[0].button}
    />
    <Card
      imgsrc={Aray[1].imgsrc}
      title={Aray[1].title}
      button={Aray[1].button}
    />
    <Card
      imgsrc={Aray[2].imgsrc}
      title={Aray[2].title}
      button={Aray[2].button}
    />
    <Card
      imgsrc={Aray[3].imgsrc}
      title={Aray[3].title}
      button={Aray[3].button}
    />
    <Card
      imgsrc={Aray[4].imgsrc}
      title={Aray[4].title}
      button={Aray[4].button}
    />
  </>,
  document.getElementById("root")
);
