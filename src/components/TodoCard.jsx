import React, { useState } from 'react'

const TodoCard = ({ todo, updateTodoStatus, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [todoName, setTodoName] = useState(todo.todoName);
  const [todoDesc, setTodoDesc] = useState(todo.todoDesc);

  const handleUpdate = () => {
    editTodo(todo.id, todoName, todoDesc);
    setIsEdit(false);
  }

  return (
    <div className="todo-card">
      {isEdit ? (
        <>
          <h3>Name:</h3>
          <input type="text" value={todoName}
            onChange={(e) => setTodoName(e.target.value)} />
          <h3>Description:</h3>
          <input type="text" value={todoDesc}
            onChange={(e) => setTodoDesc(e.target.value)} />
        </>
      ) : (
        <>
          <h3>Name: {todo.todoName}</h3>
          <h3>Description: {todo.todoDesc}</h3>
        </>
      )}

      <div className="status">
        <label>Status:</label>
        <select value={todo.status} onChange={(e) => updateTodoStatus(e.target.value, todo.id)}>
          <option value="Completed">Completed</option>
          <option value="Not completed">Not completed</option>
        </select>
      </div>

      <div className="btn-container">
        {isEdit && (
          <button className="btn-update" onClick={handleUpdate}>Update</button>
        )}
        {
          <button className="btn-edit" onClick={() => setIsEdit(true)}>Edit</button>
        }
        <button className="btn-delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  )
}

export default TodoCard