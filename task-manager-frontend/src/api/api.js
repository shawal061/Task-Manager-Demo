const API_URL = "http://localhost:5000/tasks";

// Fetch all tasks
export const fetchTasks = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

// Add a new task
export const addTask = async (title, description) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
    });
    return res.json();
};

// Mark task as completed
export const completeTask = async (id) => {
    const res = await fetch(`${API_URL}/${id}`, { method: "PATCH" });
    return res.json();
};
