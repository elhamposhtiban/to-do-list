import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodos = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // setTodos(updatedTodos);
  };


  return (
    <div>
      <h1> what is the plan for today?</h1>
      <TodoForm onSubmit={addTodos} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo = {removeTodo} />
    </div>
  );
}

export default TodoList;
