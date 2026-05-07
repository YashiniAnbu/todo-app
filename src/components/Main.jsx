import React from 'react'
import TodoCard from './TodoCard'

const Main = ({todos, updateTodoStatus,setFilter,filter,deleteTodo,editTodo}) => {
  return (
    <div className="main">
    <div className="top-bar">
      <h2 className="app-title">My Todo</h2>
      
      <div>
        <label>Status Filter:</label>
        <select 
        value={filter} 
        onChange={(e) => (setFilter(e.target.value))}>
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Not completed">Not completed</option>
        </select>
      </div>
    </div>
{
  todos.length === 0 ?
  <h1 className="empty-msg">welcome to Todo App</h1> : 

    <div className="todo-container">
      {
        todos.map((todo)=>(
          <TodoCard 
          key={todo.id} 
          todo={todo}
          updateTodoStatus={updateTodoStatus}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          />
        ))
      }
  
      </div>
}
    </div>
  )
}

export default Main
