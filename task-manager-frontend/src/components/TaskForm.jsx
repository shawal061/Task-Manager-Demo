import { useState } from "react";

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 mb-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white font-semibold rounded-lg transition hover:bg-blue-600"
      >
        ➕ Add Task
      </button>
    </form>
  );
};

export default TaskForm;
