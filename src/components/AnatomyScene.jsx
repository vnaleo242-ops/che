import React, { useState } from 'react';

const AnatomyScene = () => {
  const [isLoading, setIsLoading] = useState(true);

  // BioDigital Viewer URL with optimized UI parameters for "Direct" feel
  const viewerUrl = "https://human.biodigital.com/viewer/?id=6lzK&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-skin-layers=true&ui-loader=circle&ui-media-controls=full&ui-media-sharing=true&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=MQtvs&paid=o_060a39b2";

  return (
    <div className="fixed inset-0 bg-black flex flex-col overflow-hidden z-0">
      
      {/* 1. PROFESSIONAL DIRECT VIEWER */}
      <div className="absolute inset-0">
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#050810]">
            <div className="w-24 h-24 relative mb-6">
              <div className="absolute inset-0 border-4 border-brand-cyan/10 rounded-full animate-ping" />
              <div className="absolute inset-0 border-4 border-t-brand-cyan rounded-full animate-spin" />
            </div>
            <span className="text-sm font-rajdhani font-bold text-brand-cyan tracking-[0.5em] uppercase animate-pulse">
              Đang đồng bộ hóa dữ liệu lâm sàng...
            </span>
          </div>
        )}

        <iframe
          src={viewerUrl}
          className="w-full h-full border-none"
          title="Direct BioDigital Viewer"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />

        {/* 2. SCANNER OVERLAY GLASS (Floating over the embed) */}
        {!isLoading && (
          <div className="absolute inset-0 pointer-events-none z-10 animate-in fade-in duration-1000">
            {/* High-Tech Corner Brackets */}
            <div className="absolute top-24 left-10 w-32 h-32 border-t border-l border-brand-cyan/40 shadow-[-4px_-4px_20px_rgba(0,242,254,0.1)]" />
            <div className="absolute top-24 right-96 w-32 h-32 border-t border-r border-brand-cyan/40 shadow-[4px_-4px_20px_rgba(0,242,254,0.1)]" />
            <div className="absolute bottom-32 left-10 w-32 h-32 border-b border-l border-brand-cyan/40 shadow-[-4px_4px_20px_rgba(0,242,254,0.1)]" />
            
            {/* Vertical Telemetry Bar */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 h-1/2 w-[1px] bg-white/5">
              <div className="absolute top-0 w-6 h-[1px] bg-brand-cyan -left-[3px] shadow-[0_0_10px_#00f2fe]" />
              <div className="absolute bottom-0 w-6 h-[1px] bg-brand-cyan -left-[3px]" />
              <div className="absolute top-1/2 w-3 h-[1px] bg-white/20 -left-[1px]" />
              <div className="absolute top-1/4 w-2 h-[1px] bg-white/10 -left-[1px]" />
              <div className="absolute top-3/4 w-2 h-[1px] bg-white/10 -left-[1px]" />
            </div>

            {/* Floating Telemetry Box (HUD) */}
            <div className="absolute bottom-40 right-96 p-4 glass-panel border-white/5 rounded-xl flex flex-col gap-1">
               <span className="text-[8px] font-mono text-white/40 tracking-widest uppercase">Direct Stream</span>
               <span className="text-[10px] font-bold text-brand-cyan font-mono tracking-tighter">RENDER_ID: BD_6LZK_2026</span>
               <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-1 bg-brand-cyan/30 rounded-sm animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
               </div>
            </div>
          </div>
        )}
      </div>

      {/* 3. MAIN SYSTEM LABELS */}
      {!isLoading && (
        <div className="absolute top-32 left-20 pointer-events-none z-20 animate-in slide-in-from-left-4 duration-1000">
           <div className="flex items-center gap-6 bg-black/30 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-2xl">
              <div className="w-1.5 h-20 bg-gradient-to-b from-brand-cyan to-transparent shadow-[0_0_15px_#00f2fe]" />
              <div>
                <h2 className="text-white font-rajdhani font-black tracking-[0.3em] text-3xl uppercase leading-none">TAM GIÁC CỔ</h2>
                <div className="flex items-center gap-3 mt-3">
                  <div className="px-3 py-1 rounded bg-brand-cyan/20 border border-brand-cyan/40">
                    <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest uppercase">BioDigital Integrated</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse shadow-[0_0_10px_#00f2fe]" />
                </div>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default AnatomyScene;
