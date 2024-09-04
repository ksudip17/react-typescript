import { useState } from "react";
import styles from "./Todo.module.css";

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

  const updateTodo = (event: { target: { value: string } }) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className={styles.todoContainer}>
      <input
        className={styles.input}
        placeholder="Add a task"
        value={newTodo}
        onChange={updateTodo}
      />
      <button className={styles.addButton} onClick={addNewTask}>
        Add task
      </button>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todoItem}>
            {todo}
            <button
              className={styles.deleteButton}
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
