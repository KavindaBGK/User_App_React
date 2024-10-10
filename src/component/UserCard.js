import React from 'react';

const UserCard = ({ user }) => (
  <div className="p-6 mb-6 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-2xl transition-shadow ease-in-out duration-300">
    <div className="flex items-center space-x-4">
      <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
        {user.name.charAt(0)} 
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <p className="text-gray-600 text-sm">{user.phone}</p>
      </div>
    </div>
  </div>
);

export default UserCard;
