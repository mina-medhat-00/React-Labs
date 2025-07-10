import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center text-primary">To-Do</h2>

      <TaskForm setTasks={setTasks} />

      {tasks.length > 0 ? (
        <div>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))}
        </div>
      ) : (
        <div className="alert alert-info text-center" role="alert">
          No tasks yet! Add a new task above.
        </div>
      )}
    </div>
  );
}
