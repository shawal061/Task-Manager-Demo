import { CheckCircleIcon } from "@heroicons/react/24/solid";

const TaskList = ({ tasks, onComplete }) => {
  return (
    <div>
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
                onClick={() => onComplete(task.id)}
              >
                ✅
              </button>
            ) : (
              <CheckCircleIcon className="check-icon" />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
