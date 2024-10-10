import React from 'react';

const Header = () => (
  <header className="bg-green-500 p-4 text-white">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-sm sm:text-xl font-semibold">User App</h1>
      </div>
      <div className="mx-4" style={{ flexBasis: '500px' }}>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg text-black"
        />
      </div>

      <div>
        <p className="text-sm sm:text-xl font-semibold">Hello, Keshara</p>
      </div>
    </div>
  </header>
);

export default Header;
