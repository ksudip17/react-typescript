import Count from "./Count";
import Button from "./Button";
import Title from "./Title";
import { useCallback, useState } from "react";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const IncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const IncrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={IncrementSalary}> Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;
