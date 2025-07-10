import { useState } from "react";

let nextId = 0;

export default function TaskForm({ setTasks }) {
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }

  function addTask(e) {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks((prevValues) => [
        ...prevValues,
        { id: nextId++, content: newTask.trim() },
      ]);
      setNewTask("");
    }
  }

  return (
    <form onSubmit={addTask} className="d-flex mb-4">
      <input
        type="text"
        className="form-control me-2"
        value={newTask}
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}
