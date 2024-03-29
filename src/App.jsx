// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Check from "./Check";
import Counter from "./Counter";
import Friends from "./Friends";
import Team from "./Team";
import Users from "./User";

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
      <Check></Check>
      <Friends></Friends>
      <Users></Users>
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
