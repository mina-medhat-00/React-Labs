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
    <form action="submit" onSubmit={addTask}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <button type="submit">add</button>
    </form>
  );
}
