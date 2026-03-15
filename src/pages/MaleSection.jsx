import React, { useState } from 'react';
import WorkoutTimer from '../components/WorkoutTimer';
import { motion, AnimatePresence } from 'framer-motion';

const MaleSection = () => {
  const [goal, setGoal] = useState('gain'); // 'gain' or 'loss'
  const [stats, setStats] = useState({ weight: '', height: '', target: '' });
  const [calculation, setCalculation] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const w = parseFloat(stats.weight);
    const h = parseFloat(stats.height) / 100;
    const bmi = (w / (h * h)).toFixed(1);
    
    // Simple BMR + Activity logic
    const baseline = w * 24;
    const calories = goal === 'gain' ? baseline + 500 : baseline - 500;
    
    setCalculation({ bmi, calories });
  };

  const plan = goal === 'gain' ? [
    { day: 'Monday', exercise: 'Chest + Triceps' },
    { day: 'Tuesday', exercise: 'Back + Biceps' },
    { day: 'Wednesday', exercise: 'Legs' },
    { day: 'Thursday', exercise: 'Shoulders' },
    { day: 'Friday', exercise: 'Full Body' },
    { day: 'Saturday', exercise: 'Core Training' },
    { day: 'Sunday', exercise: 'Rest' },
  ] : [
    { day: 'Monday', exercise: 'Cardio + Abs' },
    { day: 'Tuesday', exercise: 'HIIT' },
    { day: 'Wednesday', exercise: 'Full Body' },
    { day: 'Thursday', exercise: 'Running' },
    { day: 'Friday', exercise: 'Core + Cardio' },
    { day: 'Saturday', exercise: 'Cycling' },
    { day: 'Sunday', exercise: 'Rest' },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="flex justify-center mb-12">
        <div className="bg-gymDark p-2 rounded-2xl flex space-x-2">
          <button 
            onClick={() => {setGoal('gain'); setCalculation(null);}}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${goal === 'gain' ? 'bg-gymRed text-white shadow-lg shadow-red-900/20' : 'text-gray-500 hover:text-white'}`}
          >
            WEIGHT GAIN
          </button>
          <button 
            onClick={() => {setGoal('loss'); setCalculation(null);}}
            className={`px-8 py-3 rounded-xl font-bold transition-all ${goal === 'loss' ? 'bg-gymRed text-white shadow-lg shadow-red-900/20' : 'text-gray-500 hover:text-white'}`}
          >
            WEIGHT LOSS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Inputs & Stats */}
        <div className="space-y-10">
          <motion.div layout className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">MALE {goal.toUpperCase()}</h2>
            <form onSubmit={calculate} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase font-bold tracking-wider">Current Weight (kg)</label>
                <input 
                  type="number" 
                  value={stats.weight}
                  onChange={(e) => setStats({...stats, weight: e.target.value})}
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 focus:border-gymRed outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase font-bold tracking-wider">Height (cm)</label>
                <input 
                  type="number" 
                  value={stats.height}
                  onChange={(e) => setStats({...stats, height: e.target.value})}
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 focus:border-gymRed outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase font-bold tracking-wider">{goal === 'gain' ? 'Target Weight (kg)' : 'Target Loss (kg)'}</label>
                <input 
                  type="number" 
                  value={stats.target}
                  onChange={(e) => setStats({...stats, target: e.target.value})}
                  className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 focus:border-gymRed outline-none transition-all"
                />
              </div>
              <button className="w-full bg-gymRed text-white font-bold py-4 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-red-900/40">
                CALCULATE PLAN
              </button>
            </form>
          </motion.div>

          {calculation && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="glass p-8 rounded-3xl border-gymRed border-opacity-30">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase mb-1">Your BMI</p>
                  <p className="text-3xl font-black">{calculation.bmi}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase mb-1">Target Calories</p>
                  <p className="text-3xl font-black text-gymRed">{calculation.calories}</p>
                </div>
              </div>
            </motion.div>
          )}

          <WorkoutTimer />
        </div>

        {/* Right: Workout Plan */}
        <div className="lg:col-span-2">
          <div className="glass p-8 rounded-3xl overflow-hidden">
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              WEEKLY WORKOUT PLAN
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white border-opacity-10">
                    <th className="pb-4 font-bold text-gray-400 uppercase text-sm tracking-widest">Day</th>
                    <th className="pb-4 font-bold text-gray-400 uppercase text-sm tracking-widest">Focus Exercise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white divide-opacity-5">
                  {plan.map((item, i) => (
                    <tr key={i} className="group hover:bg-white hover:bg-opacity-5 transition-all">
                      <td className="py-5 font-bold text-lg text-gymRed w-1/3">{item.day}</td>
                      <td className="py-5 text-lg group-hover:pl-4 transition-all">{item.exercise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-gray-300">CORE TRAINING (Daily)</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Plank', 'Russian Twist', 'Leg Raises', 'Mountain Climbers'].map(ex => (
                  <div key={ex} className="bg-white bg-opacity-5 p-4 rounded-xl text-center border border-white border-opacity-5">
                    <p className="font-bold">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaleSection;
