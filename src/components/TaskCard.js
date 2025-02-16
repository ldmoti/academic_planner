export default function TaskCard({ task }) {
    return (
      <div className="border p-4 rounded shadow">
        <h2 className="text-xl font-bold">{task.title}</h2>
        <p className="text-gray-600">{task.description}</p>
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
      </div>
    );
  }