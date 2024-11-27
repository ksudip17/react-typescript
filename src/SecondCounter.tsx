import useCounter from "./hooks/useCounter";

function SecondCounter() {
  const [count, increment, decrement, reset] = useCounter(10 , 5);
  return (
    <div>
      <h2>Count - {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default SecondCounter;
