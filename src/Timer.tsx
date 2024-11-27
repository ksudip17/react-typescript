import { useEffect, useState } from "react";

function Timer() {
  const [clicked, setClicked] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("We are in useState property of ReactJs");

    return () => {
      console.log("This is the  Return of useState.");
    };
  }, [clicked]);

  return (
    <div>
      <button onClick={() => setClicked("Subscribe")}>Subscribe</button> <hr />
      <br />
      <button onClick={() => setClicked("Unsubscribe")}>
        Unsubscribe
      </button>{" "}
      <hr />
      <br />
      <button onClick={() => setClicked("J garne ho gar ")}>
        J garne ho gar
      </button>{" "}
      <hr />
      <br />
      <h2>{clicked}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <h2>{count}</h2>
    </div>
  );
}

export default Timer;
