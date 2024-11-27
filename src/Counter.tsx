import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  

  const handleCountInc = () => {
    setCount(count + 1);
  };

  const handleCountDec = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCountInc}>+1</button>
      <button onClick={handleCountDec}>-1</button>

    </div>
  );
}

export default Counter;
