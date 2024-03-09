import { useState } from "react";

export default function Check() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleRemove = () => {
    const newReomve = count - 1;
    setCount(newReomve);
  };
  const addFive = (num) => {
    const newNumber = num + 5;
    setCount(newNumber);
  };
  return (
    <div>
      <h3>Hello From React World {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
      <button onClick={() => addFive(2)}>Add Five</button>
    </div>
  );
}
