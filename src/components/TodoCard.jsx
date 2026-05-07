import React, {useState} from 'react'

const TodoCard = ({todo,updateTodoStatus,deleteTodo,editTodo}) => {
  const [isEdit,setIsEdit] = useState(false);
  const [todoName,setTodoName] = useState(todo.todoName);
  const [todoDesc,setTodoDesc] = useState(todo.todoDesc);
  const handlupdate=()=>{
    editTodo(todo.id,todoName,todoDesc);
    setIsEdit(false);
  }
  return(
    <div className="todo-card">
      {
        isEdit ?(
          <>
        <h3>Name:</h3>
        <input type="text" Value={todoName}
        onChange={(e)=>(setTodoName(e.target.value))}/>
        <h3>Description:</h3>
        <input type="text" Value={todoDesc}
        onChange={(e)=>(setTodoDesc(e.target.value))}/>
        <button onClick={handlupdate}>Update</button> 
          </>
        ):(
          <>
        <h3>Name:{todo.todoName}</h3>
        <h3>Description:{todo.todoDesc}</h3>
        </>
        ) 
      }
     <div className="status">

        <label htmlFor="">Status:</label>
        <select value={todo.status} onChange={(e) => updateTodoStatus(e.target.value, todo.id)}>
         <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
</select>
         <button className="btn-update" onClick={handlupdate}>Update</button>
    </div>
    
    <div className="btn-container">
        <button className="btn-edit" onClick={()=>(setIsEdit(true))}>Edit</button>
        <button className="btn-delete" onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
    </div>
    </div>
  )
  }
export default TodoCard
