import React, { useState } from "react";
import "./Todos.css";

import Todo from "../Todo/";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);

  function addTodo() {
    const text = prompt("TODO text please!");
    setTodos([
      ...todos,
      {
        id: count,
        text: text,
        checked: false,
      },
    ]);
    setCount(count + 1);
  }

  function removeTodo(id) {
    setTodos(() => todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    setTodos(() =>
      todos.map((todo) => {
        if (todo.id !== id) return todo;

        return { id: todo.id, text: todo.text, checked: !todo.checked };
      })
    );
  }

  return (
    <div className="container">
      <div>Todo count: {todos.length}</div>
      <div>Unchecked todo count: {todos.filter(todo => !todo.checked).length}</div>
      <button onClick={() => addTodo()}>Add TODO</button>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggle={() => toggleTodo(todo.id)}
            onDelete={() => removeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todos;
