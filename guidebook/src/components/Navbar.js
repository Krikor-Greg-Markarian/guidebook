// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-indigo-500 p-4">
      <div className="container mx-auto">
        <p className="text-white text-lg font-semibold">
          Hello, welcome to the celiac guide - we make things easy
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
