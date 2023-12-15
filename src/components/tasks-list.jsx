import { useEffect, useState } from "react";

function TasksList({ allTasks, setAllTasks }) {
  const date = new Date();
  const [todayTasks, setTodayTasks] = useState([]);
  const [tomorrowTasks, setTomorrowTasks] = useState([]);
  const [soonTasks, setSoonTasks] = useState([]);


  useEffect(() => {
    if (allTasks) {
      allTasks.map((task) => {
        if (!task.match(/ertaga/gim) && !task.match(/\d\d.\d\d.\d\d\d\d/)) {
          let newTask = task.replace(/bugun/img, '');     
          if (newTask.match(/\d\d:\d\d/)) {
            const time = newTask.match(/\d\d:\d\d/)[0]
             newTask = newTask.replace(/\d\d:\d\d/, '').trim();

             (todayTasks.filter(obj => obj?.task == newTask).length == 0) &&  setTodayTasks([
              ...todayTasks,
              {
                task: newTask,
                time
              },
            ]);
          } else if(!newTask.match(/\d\d.\d\d.\d\d\d\d/)){
            let newTask = task.replace(/bugun/img, '');
            newTask = newTask.trim();
            const time = `${date.getMinutes == '00'?date.getHours(): date.getHours() + 1}:00`;

            (todayTasks.filter(obj => obj?.task == newTask).length == 0) && setTodayTasks([
              ...todayTasks,
              {
                task: newTask,
                time
              },
            ]);
          }
        }
        
        if(task.match(/ertaga/gim)) {
          let newTask = task.replace(/ertaga/igm, '')
          if(task.match(/\d\d:\d\d/)) {
            (tomorrowTasks.filter(obj => obj?.task == newTask).length == 0) && setTomorrowTasks([
              ...tomorrowTasks,
              {
                task: newTask.replace(/\d\d:\d\d/, '').trim(),
                time: newTask.match(/\d\d:\d\d/)[0]
              }
            ])
          } else {
            (tomorrowTasks.filter(obj => obj?.task == newTask).length == 0) && setTomorrowTasks([
              ...tomorrowTasks,
              {
                task: newTask,
                time: '09:00'
              }
            ])
          }
        }

        if(task.match(/\d\d.\d\d.\d\d\d\d/)) {
          if(task.match(/\d\d:\d\d/)) {
            const time = `${task.match(/\d\d:\d\d/)[0]}, ${task.match(/\d\d.\d\d.\d\d\d\d/)[0]}`
             setSoonTasks([
              ...soonTasks,
              {
                task: task.replace(/\d\d:\d\d/, '').replace(/\d\d.\d\d.\d\d\d\d/, '').trim(),
                time
              }
            ])
          } else {
            const time = `09:00, ${task.match(/\d\d.\d\d.\d\d\d\d/)[0]}`
            setSoonTasks([
              ...soonTasks,
              {
                task: task.replace(/\d\d.\d\d.\d\d\d\d/, '').trim(),
                time
              }
            ])
          }
        }
      });
    }
  }, [allTasks]);

  return (
   <div>
    <div>
      {todayTasks.length ? (
        <div>
          <h2 className="title">Bugun</h2>
          <ul>
            {todayTasks.map((item, i) => (
              <li key={i} className="list-item">
                <div>
                  <input className="checkbox" type="checkbox"/>
                  <p>{item.task}</p>
                </div>
                <p>{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
    <div>
      {tomorrowTasks.length ? (
        <div>
          <h2 className="title">Ertaga</h2>
          <ul>
            {tomorrowTasks.map((item, i) => (
              <li key={i} className="list-item">
                <div>
                  <input type="checkbox"/>
                  <p>{item.task}</p>
                </div>
                <p>{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
    <div>
      {soonTasks.length ? (
        <div>
          <h2 className="title">Keyin</h2>
          <ul>
            {soonTasks.map((item, i) => (
              <li key={i} className="list-item">
                <div>
                  <input className="checkbox" type="checkbox"/>
                  <p>{item.task}</p>
                </div>
                <p>{item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
   </div> 
   
    
  );
}

export default TasksList;
