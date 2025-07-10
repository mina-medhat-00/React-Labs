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
    <div className="d-flex align-items-center justify-content-between p-2 mb-2 border rounded">
      <div className="d-flex align-items-center text-truncate">
        <div className="form-check me-2">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={completeTask}
            disabled={completed}
            id={`task-${task.id}`}
          />
        </div>
        <p
          className={`mb-0  ${
            completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {task.content}
        </p>
      </div>
      <button onClick={removeTask} className="btn btn-danger btn-sm">
        &times;
      </button>
    </div>
  );
}
