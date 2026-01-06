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

  const gamesPreview = [
    { name: 'Steal A Brainrot', img: 'https://neoxsoftworks.eu/photos/steal-a-brainrot.jpg' },
    { name: '99 Nights In The Forest', img: 'https://neoxsoftworks.eu/photos/99_Nights_in_The_Forest.png' },
    { name: 'Plants Vs Brainrots', img: 'https://neoxsoftworks.eu/photos/PVB.jpg' },
    { name: 'Grow A Garden', img: 'https://neoxsoftworks.eu/photos/growagarden.jpg' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex justify-center mb-4">
           <img src="https://neoxsoftworks.eu/photos/neoxcristmaslogo.png" className="w-16 h-16 opacity-90" alt="Logo" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] text-zinc-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          Dont exploit, but if you do, use NEOX.
        </div>
        
        <h1 className="text-5xl font-black tracking-tight text-white">NEOX HUB</h1>
        <p className="max-w-md mx-auto text-zinc-500 text-base leading-relaxed">
          Premium scripts with advanced features and regular updates
        </p>

        {/* Loadstring Box */}
        <div className="relative max-w-xl mx-auto mt-8 bg-zinc-900/30 border border-white/5 p-3 rounded-2xl flex items-center gap-3">
          <code className="flex-1 text-left text-[11px] font-mono text-zinc-500 truncate px-2">{loaderCode}</code>
          <button onClick={copyToClipboard} className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all shadow-lg">
            {copied ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            )}
          </button>
        </div>

        {/* Action Buttons (Get Key & Reset HWID) */}
        <div className="max-w-xl mx-auto space-y-3 pt-4">
          <Link to="/getkey" className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white font-bold hover:bg-zinc-800 transition-all">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
             Get Key
          </Link>
          <button className="w-full flex items-center justify-center gap-3 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-white font-bold hover:bg-zinc-800 transition-all">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
             Reset HWID
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 gap-3 max-w-xl mx-auto">
        {[
          { label: 'Total Executions', value: '91M+' },
          { label: 'Daily Users', value: '41K+' },
          { label: 'Supported Games', value: '8' },
        ].map((stat, i) => (
          <div key={i} className="py-8 bg-zinc-900/20 border border-white/5 rounded-3xl text-center backdrop-blur-sm">
            <div className="text-4xl font-black text-white">{stat.value}</div>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Supported Games Preview */}
      <section className="space-y-8 text-center">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight">Supported Games</h2>
          <p className="text-zinc-500 text-xs">Premium scripts for popular Roblox titles</p>
        </div>

        <div className="space-y-3 max-w-xl mx-auto">
          {gamesPreview.map((game, i) => (
            <div key={i} className="flex items-center gap-4 p-4 bg-zinc-900/20 border border-white/5 rounded-2xl group transition-all hover:bg-zinc-900/40">
              <img src={game.img} className="w-12 h-12 rounded-xl object-cover" alt={game.name} />
              <div className="text-left">
                <h3 className="text-sm font-bold text-white tracking-wide">{game.name}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-[10px] text-emerald-500 font-bold uppercase">Active</span>
                </div>
              </div>
            </div>
          ))}
          <Link to="/games" className="inline-flex items-center justify-center gap-2 w-full py-4 bg-zinc-900/40 border border-white/5 rounded-2xl text-zinc-300 text-xs font-bold hover:text-white hover:bg-zinc-800 transition-all mt-4">
            Explore All Games 
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="3" /></svg>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-xl mx-auto space-y-6 pt-10">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-white tracking-tight">Frequently Asked Questions</h2>
          <p className="text-zinc-500 text-xs text-center">Quick answers to common questions</p>
        </div>
        <div className="space-y-3">
          {[
            { q: "What is NEOX HUB?", a: "NEOX HUB is a professional Roblox script hub with premium scripts, advanced features, and regular updates." },
            { q: "How do I get a key?", a: "You can generate a session key through our verification system on the Get Key page." },
            { q: "Is NEOX HUB safe to use?", a: "Yes, our scripts are optimized and tested to ensure safety and stability." },
            { q: "Which games are supported?", a: "We support over 8 popular games including Evade, Fish It, and more." },
            { q: "How do I load the script?", a: "Copy the loadstring code and paste it into your favorite Roblox executor." },
            { q: "How do I reset my HWID?", a: "You can use the Reset HWID button if you change your PC or execution environment." }
          ].map((faq, i) => (
            <div key={i} className="bg-zinc-900/20 border border-white/5 rounded-2xl p-5 hover:bg-zinc-900/40 transition-all">
              <div className="flex justify-between items-center text-white font-bold text-sm mb-2">
                {faq.q}
                <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <p className="text-zinc-500 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
