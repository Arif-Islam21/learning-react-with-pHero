// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Team from "./Team";

function App() {
  function handleClick() {
    alert("Button Clicked");
  }
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };
  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <Team></Team>
      <Counter></Counter>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>CLick 2</button>
      <button onClick={() => addToFive(9)}>Add To Five</button>
      <button
        onClick={() => {
          alert("thired clicked");
        }}
      >
        Clikc 3
      </button>
    </>
  );
}

export default App;
