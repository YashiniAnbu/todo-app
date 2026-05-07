import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './App.css'

const App = () => {
    const[todos, setTodos] = useState([]);
    const[filter, setFilter] = useState("All");

    const addTodo=(name,desc)=>{
        setTodos([...todos,{id:Date.now(),todoName:name, todoDesc:desc, status:"Not completed"}]);
    }
    const updateTodoStatus=(todoStatus,todoId)=>{
       setTodos(todos.map((todo)=>(todo.id===todoId ? {...todo, status: todoStatus} : todo)));
    }

    const deleteTodo=(todoId)=>{
        setTodos(todos.filter((todo)=>(todo.id!==todoId)));
    }

    const editTodo=(todoId,name,desc)=>{
        setTodos(todos.map((todo)=>(todo.id===todoId ? {...todo, todoName: name, todoDesc: desc} : todo)));

    }
    const filteredTodos = todos.filter((todo) => {
        if (filter === "All") return true;
            return todo.status === filter;
        })

    return (
        <div className="container">
            <h1>Todo App</h1>
            <Header addTodo={addTodo}/>
            <Main 
            todos={filteredTodos} 
            updateTodoStatus={updateTodoStatus}
            setFilter={setFilter}
            filter={filter}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            />
        </div>
    )
    
}
export default App
