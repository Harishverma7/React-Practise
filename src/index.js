import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Card";
import Aray from "./Aray";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <React.StrictMode>
      <App />
      {Aray.map((val, index) => {
        console.log(index);
        return (

          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            button={val.button}
          />

        )
      })}
    </React.StrictMode>
  </>
);