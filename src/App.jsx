// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Developer></Developer>
      <Device></Device>
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

function Device() {
  return <h2>This Device</h2>;
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
