import { useEffect, useState } from "react";
import { fetchTasks, addTask, completeTask } from "./api/api";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleAddTask = async () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and description are required!");
      return;
    }

    await addTask(title, description);
    setTitle("");
    setDescription("");
    loadTasks();
  };

  const handleCompleteTask = async (id) => {
    await completeTask(id);
    loadTasks();
  };

  return (
    <div className="container">
      {/* Left Section - Task Form */}
      <div className="form-container">
        <h1>Task Manager</h1>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button onClick={handleAddTask}>+ Add Task</button>
      </div>

      {/* Right Section - Task List */}
      <div className="task-list">
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "#ccc" }}>
            No tasks yet. Add one above! 🚀
          </p>
        ) : (
          tasks.map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? "completed" : ""}`}
            >
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              {!task.completed ? (
                <button
                  className="complete-btn"
                  onClick={() => handleCompleteTask(task.id)}
                >
                  ✅
                </button>
              ) : (
                <span className="check-icon">✔</span>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
