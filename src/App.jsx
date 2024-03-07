// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      {/* <p>learned about basic component </p>
      <p>there are 4 type to declare component</p> */}
    </>
  );
}

function Person() {
  const age = 18;
  const money = 5;
  return (
    <h3>
      I am a Person with age {age} have {money} tk
    </h3>
  );
}

export default App;
