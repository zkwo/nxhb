import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="https://neoxsoftworks.eu/photos/neoxcristmaslogo.png" alt="Logo" className="w-8 h-8 rounded-lg group-hover:scale-110 transition-transform" />
          <span className="font-bold tracking-tighter text-white">NEOX HUB</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Games', 'FAQ', 'Discord'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-zinc-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
          <Link to="/getkey" className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-zinc-200 transition-all">
            GET KEY
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-zinc-400">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-zinc-400">Home</Link>
          <Link to="/getkey" onClick={() => setIsOpen(false)} className="text-white font-bold">Get Key</Link>
          <a href="#" className="text-zinc-400">Discord</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
