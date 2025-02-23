import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Academic Planner</h1>
      <p className="text-lg mb-8">Plan your academic tasks and events efficiently.</p>
      <div className="flex gap-4">
        <Link
          href="/auth/login"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </Link>
        <Link
          href="/auth/signup"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}