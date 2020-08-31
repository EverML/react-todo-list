import React from "react";

export default function Todo({todo, onToggle, onDelete }) {
  return (
    <li>
      <span>{todo.id}</span>
      <input type="checkbox" checked={todo.checked} onChange={onToggle} />
      <span>{todo.text}</span>
      <button onClick={onDelete}>delete</button>
    </li>
  );
}
