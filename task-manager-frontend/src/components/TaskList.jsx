import { CheckCircleIcon } from "@heroicons/react/24/solid";

const TaskList = ({ tasks, onComplete }) => {
  return (
    <div className="mt-4 space-y-3">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">
          No tasks yet. Add one above! 🚀
        </p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className={`p-4 flex justify-between items-center rounded-lg shadow-md transition ${
              task.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div>
              <h3 className="font-bold text-lg text-gray-800">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
            </div>
            {!task.completed ? (
              <button
                onClick={() => onComplete(task.id)}
                className="p-2 text-white bg-green-500 rounded-lg transition hover:bg-green-600"
              >
                ✅ Complete
              </button>
            ) : (
              <CheckCircleIcon className="h-6 w-6 text-green-500" />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
