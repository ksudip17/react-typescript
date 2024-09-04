import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>The Switch is {isOn ? "On" : "Off"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "TurnOff" : "TurnOn"}
      </button>
    </div>
  );
};

export default Toggle;
