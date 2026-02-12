
import React from 'react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white text-xl">
            🍦
          </div>
          <h1 className="text-2xl font-cursive text-pink-500 font-bold">Ravi's Ice Cream</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-gray-600">
          <a href="#" className="hover:text-pink-500 transition">Menu</a>
          <a href="#" className="hover:text-pink-500 transition">Brands</a>
          <a href="#" className="hover:text-pink-500 transition">Offers</a>
          <a href="#" className="hover:text-pink-500 transition">Locations</a>
        </nav>

        <button 
          onClick={onOpenCart}
          className="relative p-2 bg-pink-100 rounded-full text-pink-600 hover:bg-pink-200 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
