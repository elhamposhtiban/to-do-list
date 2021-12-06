import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [toDoinput, setTodoInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: toDoinput
    });
    setTodoInput('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            className="todo-input edit"
            placeholder="Update it!"
            value={toDoinput}
            name="text"
            onChange={(e) => setTodoInput(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button edit"> Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="todo-input"
            placeholder="add a to do!"
            value={toDoinput}
            name="text"
            onChange={(e) => setTodoInput(e.target.value)}
            ref={inputRef}
          />
          <button className="todo-button"> add to do</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
