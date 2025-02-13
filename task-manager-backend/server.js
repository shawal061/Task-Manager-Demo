const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Temporary in-memory database (array)
let tasks = [];
let taskId = 1; // Counter for unique IDs

// ✅ Get all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

// ✅ Add a new task
app.post("/tasks", (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    const newTask = { id: taskId++, title, description, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// ✅ Mark a task as completed
app.patch("/tasks/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    task.completed = true;
    res.json(task);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
