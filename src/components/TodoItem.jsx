import { useState } from "react"

function TodoItem({ todo, deleteTodo, toggleTodo}){
    const[isEditing, setIsEditing] = useState(true)
    return(
        <div
            className="TodoItem"
            style={{
            display:'flex',
            gap:'10px',
            marginTop:'10px'
        }}>
            <input className="todo-item"
            
            type="checkbox" 
            name="" 
            id="" 
            checked={todo.completed}
            onChange={()=>toggleTodo(todo.id)}
            />
        {isEditing ? (
            <div>
                <input type="text" />
                <button>save</button>
                <button>cancel</button>
            </div>
        ):(
        <>
            <span 
            style={{
               color: todo.completed ? 'blue' : 'black'
                }}>{todo.text}</span> 
            <button onClick={}></button>)}  
            <button onClick={()=>deleteTodo(todo.id)}>
                Delete
            </button>
            
        </div>
    )
}

export default TodoItem