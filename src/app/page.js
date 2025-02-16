export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Academic Planner</h1>
      <p className="mb-4">Plan your academic tasks and events efficiently.</p>
      <div className="flex gap-4">
        <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </a>
        <a href="/signup" className="bg-green-500 text-white px-4 py-2 rounded">
          Sign Up
        </a>
      </div>
    </div>
  );
}