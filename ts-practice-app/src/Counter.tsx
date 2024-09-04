import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCountInc = () => {
    setCount(count + 1);
  };

  const handleCountDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCountInc}>+1</button>
      <button onClick={handleCountDec}>-1</button>
    </div>
  );
};

export default Counter;
