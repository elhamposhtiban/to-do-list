import React, { useState } from "react";

function TodoForm() {
  const [toDOinput, setTodoInput] = useState("");
  console.log(" this is a input value", toDOinput);
  return (
    <form className="toDo-form">
      <input
        type="text"
        className="input"
        placeholder="add a to do!"
        value={toDOinput}
        name="text"
        onChange={(e) => setTodoInput(e.target.value)}
      />
    </form>
  );
}

export default TodoForm;
