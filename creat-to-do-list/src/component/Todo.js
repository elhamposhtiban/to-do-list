import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isCompelet ? "todo-row compelet" : "todo-row"}
      key={index}
    ></div>
  ));
}

export default Todo;
