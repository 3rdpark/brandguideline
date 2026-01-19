
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 flex items-center px-6 md:px-12 justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">Pinterest Predicts</span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-black transition-colors">Trends</a>
          <a href="#" className="hover:text-black transition-colors">Business</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-100 rounded-full transition-colors">Login</button>
        <button className="px-5 py-2 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-full transition-colors">Get started</button>
      </div>
    </nav>
  );
};

export default Navbar;
