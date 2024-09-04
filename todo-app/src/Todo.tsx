import { SetStateAction, useState } from "react";
import "./index.css";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const updateTodo = (event: { target: { value: SetStateAction<string> } }) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodo} />
      <br />
      <br />
      <button onClick={addNewTask}>Add task</button>
      <br />
      <br />
      <br />

      <hr />
      <h3>Tasks Todo</h3>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button className="delt-btn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
