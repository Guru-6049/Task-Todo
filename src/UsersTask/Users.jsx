import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }

      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  // Loader UI
  if (loading) {
    return <h2>Loading users...</h2>;
  }

  // Error UI
  if (error) {
    return (
      <div>
        <h2>Error: {error}</h2>
        <button onClick={fetchUsers}>Retry</button>
      </div>
    );
  }

  return (
  <div className="max-w-2xl mx-auto mt-10 px-4">
  <h2 className="text-2xl font-semibold text-center mb-6">
    User List
  </h2>

  <ul className="space-y-4">
    {users.map(user => (
      <li
        key={user.id}
        className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
      >
        {/* Avatar */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white text-lg font-bold mr-4">
          {user.name.charAt(0)}
        </div>

        {/* User Info */}
        <div>
          <h3 className="text-lg font-medium">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
}
