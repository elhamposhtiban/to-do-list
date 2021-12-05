import React, { useState } from "react";
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo({todos, completeTodo, removeTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
        <div key ={todo.id} onClick = { completeTodo(todo.id)} >
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine
            onclick = {()=> removeTodo(todo.id)}
            className='delete-icon'/>
            <TiEdit
             onclick = {()=> setEdit({id:todo.id, value:todo.text})}
             className='edit-icon'/>

        </div>
    </div>
  ));
}

export default Todo;
