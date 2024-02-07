import React from 'react'
import { useState } from 'react'
const TODOLIST = () => {
    const [todos, setTodo] = useState(["sample task"])
    const [newtodos, setnewTodo] = useState("")
    


    const addTask = ()=>{
        setTodo([...todos , newtodos])
        setnewTodo("")
       
    }
    let updateTodovalue = (event)=>{

       setnewTodo(event.target.value)
    
    }


  return (
    <div>
        <input placeholder='add a task' value={newtodos} onChange={updateTodovalue}/>
        <button onClick={addTask}> ADD TASK</button>
        <br /><br /><br /><br />
      <h4> Task To Do </h4>
     {
        todos.map((todo)=><li>{todo}</li>

        )
     }
    </div>
  )
}

export default TODOLIST
