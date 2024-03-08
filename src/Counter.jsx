import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function addValue() {
    const newCount = count + 1;
    setCount(newCount);
  }

  const decrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid purple" }}>
      <h3>Counter : {count}</h3>
      <button onClick={addValue}>Add</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}
