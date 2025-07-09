import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import "./Tasks.css";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  console.log(tasks);

  return (
    <>
      <div className="task-form">
        <TaskForm setTasks={setTasks} />
      </div>
      <div className="task-container">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </div>
    </>
  );
}
