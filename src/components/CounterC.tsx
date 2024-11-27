import { useMemo, useState } from "react";

function CounterC() {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const incrementOne = () => {
    setFirstCounter(firstCounter + 1);
  };

  const incrementTwo = () => {
    setSecondCounter(secondCounter + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return firstCounter % 2 === 0;
  }, [firstCounter]);
  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {firstCounter}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}> Count Two - {secondCounter}</button>
      </div>
    </div>
  );
}

export default CounterC;
