import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 py-12 bg-black/40">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-white tracking-tighter">NEOX HUB</h3>
          <p className="text-zinc-500 text-xs mt-1">© 2025 All Rights Reserved.</p>
        </div>
        
        <div className="flex gap-6">
          <button className="text-xs text-zinc-500 hover:text-white transition-colors">Terms</button>
          <button className="text-xs text-zinc-500 hover:text-white transition-colors">Privacy</button>
          <a href="https://www.instagram.com/hxssan.zayn/" target="_blank" className="text-xs text-zinc-500 hover:text-white transition-colors">Developed by Hassan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
