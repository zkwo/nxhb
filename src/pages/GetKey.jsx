import React from 'react';

const GetKey = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6">
      <div className="relative group max-w-md w-full">
        <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 to-zinc-400 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        
        <div className="relative bg-[#0a0a0c]/80 backdrop-blur-3xl border border-white/10 p-10 rounded-3xl shadow-2xl text-center">
          <div className="w-20 h-20 bg-zinc-900/50 rounded-2xl border border-white/10 mx-auto mb-8 flex items-center justify-center shadow-inner">
             <img src="https://neoxsoftworks.eu/photos/neoxcristmaslogo.png" className="w-12 opacity-90" alt="Logo" />
          </div>
          
          <h2 className="text-3xl font-black text-white mb-3 tracking-tighter uppercase">Verification</h2>
          <p className="text-zinc-500 text-sm mb-10 leading-relaxed font-medium">
            Complete the checkpoint to unlock your <span className="text-white">24-hour access</span>. HWID will be locked automatically.
          </p>
          
          <button className="w-full py-4 bg-white text-black font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            GENERATE KEY
          </button>
          
          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
             <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Server Online</span>
             </div>
             <span className="text-[10px] text-zinc-600 font-mono">v2.0.4-PRO</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetKey;
