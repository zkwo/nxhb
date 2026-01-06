import React from 'react';

const GetKey = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="relative group max-w-md w-full">
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        
        {/* Main Card */}
        <div className="relative bg-black/60 backdrop-blur-2xl border border-white/10 p-10 rounded-2xl shadow-2xl text-center">
          <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-white/10 mx-auto mb-6 flex items-center justify-center">
             <img src="https://neoxsoftworks.eu/photos/neoxcristmaslogo.png" className="w-10 opacity-80" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Verification System</h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            Please complete the linkvertise checkpoint to unlock your 10-hour session key.
          </p>
          
          <button className="w-full py-4 bg-white text-black font-black rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            GENERATE KEY NOW
          </button>
          
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between text-[10px] text-zinc-500 tracking-tighter uppercase">
             <span>Status: Online</span>
             <span>Encrypted: AES-256</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKey;
