'use client';

import { useAuth } from '../../context/AuthContext';
import TaskCard from '../../components/TaskCard';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tasks, setTasks] = useState([]);

  // Fetch tasks for the logged-in user
  useEffect(() => {
    if (user) {
      fetch('/api/tasks', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setTasks(data))
        .catch((error) => console.error(error));
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Your Tasks</h2>
          <div className="grid gap-4">
            {tasks.map((task) => (
              <TaskCard key={task._id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}