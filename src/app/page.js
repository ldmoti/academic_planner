import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to Academic Planner
      </h1>
      <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
        Plan your academic tasks and events efficiently.
      </p>
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