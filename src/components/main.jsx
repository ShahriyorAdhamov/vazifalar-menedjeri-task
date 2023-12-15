import { useEffect, useState } from "react"
import AddTasks from "./add-tasks"
import TasksList from "./tasks-list"


function Main() {
  const [allTasks, setAllTasks] = useState([])

  return (
    <main>
        <AddTasks
          allTasks = {allTasks} 
          setAllTasks = {setAllTasks}
        />
        <TasksList 
          allTasks={allTasks} 
          setAllTasks={setAllTasks}
        />
    </main>
  )
}

export default Main