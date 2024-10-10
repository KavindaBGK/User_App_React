import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch users');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id}>
          <UserCard user={user} />
        </Link>
      ))}
    </div>
  );
};

export default UserList;
