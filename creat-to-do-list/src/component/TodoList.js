import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from './Todo'

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };
  return (
    <div>
      <h1> what is the plan for today?</h1>
      <TodoForm onSubmit={addTodos} />
      <Todo/>
    </div>
  );
}

export default TodoList;
