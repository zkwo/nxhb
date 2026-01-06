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

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center space-y-6 mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-zinc-500 animate-pulse"></span>
          Premium Script Services
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          NEOX HUB
        </h1>
        
        <p className="max-w-xl mx-auto text-zinc-400 text-lg">
          Minimalist interface. Maximum performance.
        </p>

        {/* Loader Box Monokrom */}
        <div className="max-w-2xl mx-auto p-1 rounded-2xl bg-gradient-to-b from-zinc-700/20 to-transparent border border-zinc-800 backdrop-blur-xl">
          <div className="flex items-center gap-4 bg-black/40 p-4 rounded-xl">
            <code className="flex-1 text-left text-xs font-mono text-zinc-500 truncate">{loaderCode}</code>
            <button 
              onClick={copyToClipboard}
              className="px-6 py-2 bg-zinc-100 hover:bg-white text-black font-bold rounded-lg transition-all text-sm"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Link to="/getkey" className="px-8 py-3 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 rounded-xl transition-all font-medium">
            Get Access Key
          </Link>
          <a href="#discord" className="px-8 py-3 bg-white text-black rounded-xl font-bold hover:bg-zinc-200 transition-all">
            Join Community
          </a>
        </div>
      </div>

      {/* Stats Monokrom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Executions', value: '91M+' },
          { label: 'Daily Users', value: '41K+' },
          { label: 'Games', value: '8' },
        ].map((stat, i) => (
          <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm hover:border-zinc-600 transition-all">
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs uppercase tracking-widest text-zinc-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
