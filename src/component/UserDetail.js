import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        setError('Failed to fetch user details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-lg text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{user.name}</h2>

        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Website:</span> <a href={`https://${user.website}`} className="text-blue-500">{user.website}</a>
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Address:</span> {user.address.street}, {user.address.city}
          </p>
        </div>

        <Link to="/" className="mt-6 inline-block text-center py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Back to Users
        </Link>
      </div>
    </div>
  );
};

export default UserDetail;
