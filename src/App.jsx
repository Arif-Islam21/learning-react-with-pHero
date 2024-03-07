// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="15"></Device>
      <Student></Student>
      <Developer></Developer>
      {/* <p>learned about basic component </p>
      <p>there are 4 type to declare component</p> */}
    </>
  );
}

function Student() {
  return (
    <div className="student">
      <h3>this is a student</h3>
    </div>
  );
}

function Device(props) {
  return (
    <h2>
      This Device: {props.name} Price : {props.price}
    </h2>
  );
}

function Developer() {
  const developerStyle = {
    margin: "10px",
    padding: "10px",
    border: "2px solid tomato",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>Coding</p>
    </div>
  );
}

export default App;
