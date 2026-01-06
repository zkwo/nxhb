import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [copied, setCopied] = useState(false);
  const loaderCode = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/..."))()';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(loaderCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Total Executions', value: '91M+' },
    { label: 'Daily Users', value: '41K+' },
    { label: 'Supported Games', value: '8' },
  ];

  const gamesPreview = [
    { name: 'Steal A Brainrot', img: 'https://neoxsoftworks.eu/photos/steal-a-brainrot.jpg' },
    { name: '99 Nights In The Forest', img: 'https://neoxsoftworks.eu/photos/99_Nights_in_The_Forest.png' },
    { name: 'Plants Vs Brainrots', img: 'https://neoxsoftworks.eu/photos/PVB.jpg' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      
      {/* Hero Section */}
      <section className="text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-100 animate-pulse"></span>
          The Future of Roblox Scripting
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter bg-gradient-to-b from-white via-white to-zinc-700 bg-clip-text text-transparent">
          NEOX HUB
        </h1>
        
        <p className="max-w-xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
          Experience the next generation of script hubs. <br/>Fast, secure, and purely monochrome.
        </p>

        {/* Loader Box */}
        <div className="max-w-2xl mx-auto group">
          <div className="relative p-[1px] rounded-2xl bg-gradient-to-b from-zinc-700/50 to-transparent transition-all duration-500 group-hover:from-zinc-500">
            <div className="flex items-center gap-4 bg-[#0a0a0c] p-4 rounded-[15px] backdrop-blur-3xl">
              <code className="flex-1 text-left text-[11px] font-mono text-zinc-500 truncate select-all">{loaderCode}</code>
              <button 
                onClick={copyToClipboard}
                className="px-6 py-2.5 bg-zinc-100 hover:bg-white text-black font-bold rounded-xl transition-all text-xs shadow-xl active:scale-95"
              >
                {copied ? 'COPIED' : 'COPY'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Centered Text */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="group relative p-8 rounded-3xl bg-zinc-900/20 border border-white/[0.03] backdrop-blur-md hover:bg-zinc-900/40 transition-all text-center">
            <div className="absolute inset-0 rounded-3xl border border-white/5 group-hover:border-white/10 transition-colors"></div>
            <div className="text-4xl font-black text-white mb-2 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Supported Games Section */}
      <section className="space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold text-white tracking-tight">Supported Games</h2>
          <p className="text-zinc-500 text-sm">Premium scripts for your favorite Roblox titles.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamesPreview.map((game, i) => (
            <div key={i} className="group bg-zinc-900/30 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={game.img} 
                  alt={game.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" 
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold text-emerald-500 uppercase">Active</span>
                </div>
              </div>
              <div className="p-5 border-t border-white/5">
                <h3 className="text-white font-bold tracking-wide">{game.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <a 
            href="/games" 
            className="group flex items-center gap-3 px-10 py-4 bg-zinc-100 text-black font-black rounded-2xl hover:bg-white transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            EXPLORE ALL GAMES
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
