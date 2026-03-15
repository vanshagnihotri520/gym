import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Flame, Heart } from 'lucide-react';

const ZumbaSection = () => {
  const [activeSession, setActiveSession] = useState(null);

  const sessions = [
    { title: 'Full Body Party', duration: '20 min', difficulty: 'Beginner', id: 'session1' },
    { title: 'Intense Fat Burn', duration: '30 min', difficulty: 'Advanced', id: 'session2' },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative h-[60vh] rounded-[3rem] overflow-hidden mb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10 flex flex-col justify-center px-12">
          <span className="bg-gymRed text-xs font-black px-3 py-1 rounded-full w-fit mb-4 tracking-widest">DANCE & BURN</span>
          <h1 className="text-6xl font-black mb-6 leading-none">ZUMBA <br/><span className="text-gymRed">ENERGY</span></h1>
          <p className="text-gray-300 max-w-md mb-8">Turn your workout into a party. High-energy movements, vibrant music, and maximum fat burning.</p>
          <button className="bg-white text-black font-black px-8 py-4 rounded-full w-fit flex items-center hover:bg-gymRed hover:text-white transition-all group">
            START NOW <Play className="ml-2 group-hover:scale-110 transition-transform" size={18} fill="currentColor"/>
          </button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop" 
          alt="Zumba" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sessions.map(s => (
            <div key={s.id} className="glass p-8 rounded-3xl group cursor-pointer hover:border-gymRed/50 transition-all">
              <div className="flex justify-between items-start mb-6">
                <Music className="text-gymRed" size={32} />
                <span className="text-sm font-bold text-gray-500">{s.duration}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-6 font-medium">{s.difficulty}</p>
              <button className="text-gymRed font-bold flex items-center group-hover:translate-x-2 transition-transform">
                Watch Session <Play className="ml-2" size={14} fill="currentColor"/>
              </button>
            </div>
          ))}
        </div>

        <div className="glass p-10 rounded-[3rem] flex flex-col justify-between">
          <h2 className="text-3xl font-black mb-10 leading-tight tracking-tight">WHY <br/><span className="text-gymRed">ZUMBA?</span></h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-gymRed/10 p-3 rounded-2xl"><Flame className="text-gymRed" size={24}/></div>
              <div>
                <h4 className="font-bold">Fat Burning</h4>
                <p className="text-sm text-gray-400">Burn up to 600 calories per session.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-gymRed/10 p-3 rounded-2xl"><Heart className="text-gymRed" size={24}/></div>
              <div>
                <h4 className="font-bold">Cardio Health</h4>
                <p className="text-sm text-gray-400">Improve your heart rate and endurance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZumbaSection;
