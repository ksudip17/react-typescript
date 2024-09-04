import Counter from "./Counter";
import Greeting from "./Greeting";
import TaskList from "./TaskList";
import Toggle from "./Toggle";
import FruitManager from "../FruitManager";
import Form from "./Form";
import NameForm from "./NameForm";

function App() {
  return (
    <>
      <Greeting name="sudip" />
      <hr />
      <Counter />
      <hr />
      <Toggle />
      <hr />
      <TaskList />
      <hr />
      <FruitManager />
      <hr />
      <Form />
      <hr />
      <NameForm />
    </>
  );
}

export default App;
