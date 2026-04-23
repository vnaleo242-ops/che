import React, { useState } from 'react';
import { 
  Menu, Search, Bell, User, Layers, 
  Activity, Settings, HelpCircle, 
  ChevronRight, Brain, Heart, Wind, 
  ArrowLeftRight, Database, Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnatomyScene from './components/AnatomyScene';

const App = () => {
  const [activeTab, setActiveTab] = useState('anatomy');
  
  const navItems = [
    { id: 'anatomy', icon: Layers, label: 'Giải Phẫu 3D' },
    { id: 'physiology', icon: Activity, label: 'Sinh Lý Học' },
    { id: 'database', icon: Database, label: 'Thư Viện' },
    { id: 'settings', icon: Settings, label: 'Tùy Chỉnh' }
  ];

  const systems = [
    { 
      title: 'Hệ Thần Kinh', 
      active: true,
      items: ['Não Bộ', 'Tủy Sống', 'Dây Thần Kinh'], 
      color: 'text-brand-purple' 
    },
    { 
      title: 'Hệ Cơ (Cổ)', 
      active: true,
      items: ['Cơ Ức Móng', 'Cơ Vai Móng', 'Cơ Giáp Móng'], 
      color: 'text-brand-cyan' 
    },
    { 
      title: 'Hệ Xương', 
      active: false,
      items: ['Đốt Sống Cổ', 'Xương Móng', 'Xương Đòn'], 
      color: 'text-white' 
    }
  ];

  return (
    <div className="flex h-screen w-screen bg-medical-bg overflow-hidden text-white font-inter">
      
      {/* 1. LEFT PINNED SIDEBAR (Compact Nav) */}
      <aside className="w-20 glass-panel border-r border-white/5 flex flex-col items-center py-8 z-50">
        <div className="w-12 h-12 bg-brand-cyan/20 rounded-xl flex items-center justify-center mb-12 shadow-[0_0_20px_rgba(0,242,254,0.3)]">
          <Brain className="text-brand-cyan w-8 h-8" />
        </div>
        
        <nav className="flex-1 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`p-4 rounded-2xl transition-all group relative ${
                activeTab === item.id ? 'bg-brand-cyan/10 text-brand-cyan' : 'text-white/40 hover:text-white'
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="absolute left-20 bg-medical-panel px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="space-y-4">
          <button className="p-4 text-white/40 hover:text-white"><HelpCircle className="w-6 h-6" /></button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-cyan to-brand-blue" />
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col relative min-w-0">
        
        {/* HEADER */}
        <header className="h-20 px-8 flex items-center justify-between z-30 pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text" 
                placeholder="Tìm kiếm giải phẫu chuyên sâu..." 
                className="bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-6 text-sm w-80 focus:outline-none focus:border-brand-cyan/50 focus:bg-white/10 transition-all font-mono"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 pointer-events-auto">
            <button className="relative p-2 text-white/60 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-medical-bg" />
            </button>
            <div className="h-6 w-[1px] bg-white/10" />
            <span className="text-xs font-mono tracking-widest text-brand-cyan opacity-80 decoration-brand-cyan underline-offset-4 underline uppercase">NỀN TẢNG: BIODIGITAL ENGINE</span>
            <button className="glass-panel p-2 rounded-lg hover:border-brand-cyan transition-colors">
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* PROFESSIONAL 3D VIEWPORT */}
        <div className="absolute inset-0 z-10 flex flex-col pt-20 pb-24 px-8">
           <div className="flex-1 rounded-3xl overflow-hidden glass-panel border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <AnatomyScene />
           </div>
        </div>

        {/* BOTTOM HUD */}
        <footer className="h-24 px-8 flex items-end pb-6 z-30 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto w-full justify-between items-center">
            <div className="flex gap-4">
              <div className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 font-mono tracking-tighter uppercase text-xs">Phân tích</span>
                  <span className="text-sm font-bold tracking-widest uppercase">Tam Giác Cổ</span>
                </div>
                <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
                  <div className="px-4 py-1.5 rounded text-[10px] font-bold bg-brand-cyan text-black shadow-[0_0_10px_#00f2fe]">FACOURSE_ACTIVE</div>
                </div>
              </div>

              <div className="glass-panel px-6 py-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-brand-cyan transition-colors">
                <Activity className="w-5 h-5 text-brand-cyan" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/40 font-mono tracking-tighter">SINH HIỆU</span>
                  <span className="text-sm font-bold tracking-widest">86 BPM</span>
                </div>
              </div>
            </div>

            <div className="text-brand-cyan/40 font-mono text-[9px] tracking-[0.4em] uppercase">© 2026 SINH PLATFORM - BIODIGITAL HUMAN ENGINE</div>
          </div>
        </footer>
      </main>

      {/* 3. RIGHT PANEL (Anatomy Tree) */}
      <aside className="w-80 glass-panel border-l border-white/5 flex flex-col z-40">
        <div className="p-8 border-b border-white/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg tracking-wide uppercase">Cấu trúc 3D</h3>
            <Layers className="w-4 h-4 text-brand-cyan" />
          </div>
          <p className="text-xs premium-text-secondary leading-relaxed">Sử dụng thanh công cụ bên trong mô hình để điều khiển các lớp giải phẫu chuyên sâu.</p>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-8">
          {systems.map((system) => (
            <div key={system.title}>
              <div className="flex items-center justify-between mb-4 group cursor-pointer">
                <div className="flex items-center gap-2">
                  <ChevronRight className={`w-4 h-4 text-white/40 transition-transform ${system.active ? 'rotate-90' : ''}`} />
                  <h4 className={`text-xs font-bold uppercase tracking-widest ${system.color}`}>{system.title}</h4>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center ${system.active ? 'bg-brand-cyan border-brand-cyan' : 'border-white/20'}`}>
                  {system.active && <div className="w-2 h-2 bg-black rounded-sm" />}
                </div>
              </div>
              
              {system.active && (
                <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                  {system.items.map((item) => (
                    <div key={item} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/0 hover:border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                      <span className="text-sm premium-text-primary group-hover:text-white">{item}</span>
                      <Maximize2 className="w-3 h-3 text-white/20 group-hover:text-brand-cyan" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-8 border-t border-white/5 bg-black/20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-[10px] font-mono premium-text-secondary tracking-widest uppercase">Sync Status: Optimal</span>
          </div>
          <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '92%' }}
              className="bg-brand-cyan h-full shadow-[0_0_10px_#00f2fe]"
            />
          </div>
        </div>
      </aside>

      <div className="scan-line" />
    </div>
  );
};

export default App;
