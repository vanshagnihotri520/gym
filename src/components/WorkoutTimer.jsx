import React, { useState, useEffect } from 'react';

const WorkoutTimer = ({ defaultTime = 30 }) => {
  const [timeLeft, setTimeLeft] = useState(defaultTime);
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(defaultTime);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => {
    setTimeLeft(initialTime);
    setIsActive(false);
  };

  const adjustTime = (amount) => {
    const newTime = Math.max(0, initialTime + amount);
    setInitialTime(newTime);
    setTimeLeft(newTime);
  };

  return (
    <div className="glass p-8 rounded-3xl text-center">
      <div className="flex justify-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gymRed"><path d="M10 2h4"/><path d="M12 14v-4"/><path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-8 7Z"/><path d="M9 17h6"/></svg>
      </div>
      <h3 className="text-xl font-bold mb-6">WORKOUT TIMER</h3>
      
      <div className="text-6xl font-black mb-8 font-mono text-gymRed">
        {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
      </div>

      <div className="flex justify-center space-x-4 mb-8">
        <button onClick={() => adjustTime(-15)} className="p-3 bg-white bg-opacity-5 rounded-full hover:bg-opacity-10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg></button>
        <button onClick={() => adjustTime(15)} className="p-3 bg-white bg-opacity-5 rounded-full hover:bg-opacity-10"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg></button>
      </div>

      <div className="flex justify-center space-x-4">
        <button 
          onClick={toggle}
          className={`flex-grow py-4 rounded-2xl font-bold transition-all flex items-center justify-center space-x-2 ${isActive ? 'bg-white text-black' : 'bg-gymRed text-white'}`}
        >
          {isActive ? 'PAUSE' : 'START'}
        </button>
        <button 
          onClick={reset}
          className="p-4 bg-white bg-opacity-5 rounded-2xl hover:bg-opacity-10 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-8">
        {[30, 45, 60].map(t => (
          <button 
            key={t}
            onClick={() => { setInitialTime(t); setTimeLeft(t); setIsActive(false); }}
            className={`py-2 rounded-lg text-sm font-bold border transition-all ${initialTime === t ? 'border-gymRed bg-gymRed bg-opacity-10 text-gymRed' : 'border-white border-opacity-10 text-gray-400'}`}
          >
            {t}s
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkoutTimer;
