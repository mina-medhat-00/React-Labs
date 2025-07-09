import { useState } from "react";

export default function TaskCard({ task, tasks, setTasks }) {
  const [completed, setCompleted] = useState(false);

  function completeTask() {
    setCompleted(true);
  }

  function removeTask() {
    setTasks(tasks.filter((item) => item.id !== task.id));
  }

  return (
    <div className="task-card">
      <input type="checkbox" onClick={completeTask} disabled={completed} />
      <p style={{ textDecoration: completed ? "line-through" : "none" }}>
        {task.content}
      </p>
      <button onClick={removeTask} className="tasks-btn">
        X
      </button>
    </div>
  );
}
