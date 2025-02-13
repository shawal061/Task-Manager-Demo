import { useEffect, useState } from "react";
import { fetchTasks, addTask, completeTask } from "./api/api";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const data = await fetchTasks();
    setTasks(data);
  };

  const handleAddTask = async (title, description) => {
    await addTask(title, description);
    loadTasks();
  };

  const handleCompleteTask = async (id) => {
    await completeTask(id);
    loadTasks();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          📝 Task Manager
        </h1>
        <TaskForm onAdd={handleAddTask} />
        <TaskList tasks={tasks} onComplete={handleCompleteTask} />
      </div>
    </div>
  );
};

export default App;
