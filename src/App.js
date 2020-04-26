import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./Button";

class App extends React.Component {
  constructor() {
    super();
  }

  displayData = (data) => {
    console.log(data);
  };

  render() {
    return (
      <div id="drum-machine">
        <h1>React Drum Machine</h1>
        <Button />
      </div>
    );
  }
}

export default App;
