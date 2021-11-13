import React, {useState} from 'react';
import TodoForm from "./TodoForm"

function TodoList() {
    const [todos, setTodos] = useState([])
    const addTodos = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
    }
    return (
        <div>
        <h1> what is the plan for today?</h1>
        <TodoForm/>
            
        </div>
    )
}

export default TodoList
