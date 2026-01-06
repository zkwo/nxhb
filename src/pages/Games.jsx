import React, { useState } from 'react';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const allGames = [
    { name: 'Steal A Brainrot', img: 'https://neoxsoftworks.eu/photos/steal-a-brainrot.jpg', status: 'Active' },
    { name: '99 Nights In The Forest', img: 'https://neoxsoftworks.eu/photos/99_Nights_in_The_Forest.png', status: 'Active' },
    { name: 'Plants Vs Brainrots', img: 'https://neoxsoftworks.eu/photos/PVB.jpg', status: 'Active' },
    { name: 'Grow A Garden', img: 'https://neoxsoftworks.eu/photos/growagarden.jpg', status: 'Active' },
    { name: 'Fish It', img: 'https://neoxsoftworks.eu/photos/fishit.jpg', status: 'Active' },
    { name: 'Dead Rails', img: 'https://neoxsoftworks.eu/photos/deadrails.jpg', status: 'Active' },
    { name: 'Evade', img: 'https://neoxsoftworks.eu/photos/evade.jpg', status: 'Active' },
    { name: 'Forge', img: 'https://neoxsoftworks.eu/photos/forge.jpg', status: 'Active' },
  ];

  const filteredGames = allGames.filter(game =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">Supported Games</h1>
        <p className="text-zinc-500 max-w-lg mx-auto">Explore our collection of premium scripts for popular Roblox titles</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-zinc-600 group-focus-within:text-zinc-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Search games..."
          className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-zinc-900 transition-all backdrop-blur-md"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid Games */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGames.map((game, i) => (
          <div key={i} className="group bg-zinc-900/20 border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 hover:bg-zinc-900/40 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
            <div className="relative aspect-video">
              <img src={game.img} alt={game.name} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{game.status}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-zinc-300 transition-colors">{game.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20 text-zinc-600">No games found matching your search.</div>
      )}
    </div>
  );
};

export default Games;
