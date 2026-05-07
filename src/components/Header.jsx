import React ,{useState} from 'react'
const Header = ({addTodo}) => {
    const [todoName, setTodoName] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const handleSubmit=()=>{
        addTodo(todoName, todoDesc);
        setTodoName("");
        setTodoDesc("");
    }
    
    return(
        <div className="header">
         <input type="text" 
         placeholder="Todo Name"
          value={todoName} 
          onChange={(e) => (setTodoName(e.target.value))}/>

           <input type="text"
            placeholder="Todo Description" 
            value={todoDesc} 
            onChange={(e) => (setTodoDesc(e.target.value))}/>
            
           <button onClick={handleSubmit}>Add Todo</button>
            </div>  
    )
   
}

export default Header
