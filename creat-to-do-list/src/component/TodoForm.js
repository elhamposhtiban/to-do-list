import React, { useState } from "react";

function TodoForm(props) {
  const [toDOinput, setTodoInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: toDOinput
    })
    setTodoInput('')
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="add a to do!"
        value={toDOinput}
        name="text"
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button className="todo-button"> add to do</button>
    </form>
  );
}

export default TodoForm;
