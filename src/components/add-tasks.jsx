import { useState } from "react"

function AddTasks({setAllTasks, allTasks}) {
    const [createTask, setCreateTask] = useState('');

    function submitTask(e) {
        e.preventDefault();
        if(createTask) {
            setAllTasks([...allTasks, createTask])
            setCreateTask('')
        }
    }

  return (
    <div className='add-tasks'>
        <form onSubmit={submitTask} className="add-tasks__form">
            <input 
                value={createTask}
                onChange={e => setCreateTask(e.target.value)} 
                className='add-tasks__input' 
                type="text" 
                placeholder="Yangi vazifa qo'shish"/>
            <button 
                className='add-tasks__button' 
                type="submit">
                +
            </button>
        </form>

    </div>
  )
}

export default AddTasks