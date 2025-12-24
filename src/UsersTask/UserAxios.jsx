import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UserAxios() {
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
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(res.data);
    } catch (err) {
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <h2>Loading...</h2>;

  if (error)
    return (
      <>
        <p>{error}</p>
        <button onClick={fetchUsers}>Retry</button>
      </>
    );

  return (
 <ul className="user-list">
  {users.map(user => (
    <li key={user.id} className="user-card">
      <div className="avatar">
        {user.name.charAt(0)}
      </div>

      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </li>
  ))}
</ul>
  );
}

export default UserAxios