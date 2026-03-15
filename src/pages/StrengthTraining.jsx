import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Info } from 'lucide-react';

const StrengthTraining = () => {
  const exercises = [
    { 
      name: 'Squats', 
      sets: '4 Sets', 
      reps: '8-12 Reps', 
      desc: 'Keep your back straight and lower your hips until they are below your knees.',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Deadlift', 
      sets: '3 Sets', 
      reps: '5-8 Reps', 
      desc: 'Lift the bar using your legs and glutes, keeping the bar close to your shins.',
      img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Bench Press', 
      sets: '4 Sets', 
      reps: '10 Reps', 
      desc: 'Lower the bar to your chest and push it back up with controlled movements.',
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Shoulder Press', 
      sets: '3 Sets', 
      reps: '12 Reps', 
      desc: 'Press the weights overhead while maintaining a stable core.',
      img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      name: 'Pull ups', 
      sets: '3 Sets', 
      reps: 'Until Failure', 
      desc: 'Pull yourself up until your chin is above the bar.',
      img: 'https://images.unsplash.com/photo-1526506118915-c74209d93b5e?q=80&w=2070&auto=format&fit=crop'
    },
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-5xl font-black mb-4 flex items-center">
          <Award className="mr-4 text-gymRed" size={48} /> STRENGTH <span className="text-gymRed ml-3">TRAINING</span>
        </h1>
        <p className="text-gray-400 text-lg">Master the fundamentals of powerlifting and bodybuilding.</p>
      </div>

      <div className="space-y-8">
        {exercises.map((ex, i) => (
          <motion.div 
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={ex.name} 
            className="glass rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row h-full group"
          >
            <div className="w-full md:w-1/3 overflow-hidden">
              <img src={ex.img} alt={ex.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-10 flex flex-col justify-center flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-black text-white mb-2">{ex.name}</h3>
                  <div className="flex space-x-4">
                    <span className="bg-gymRed text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{ex.sets}</span>
                    <span className="bg-white/10 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{ex.reps}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-xl text-lg flex items-start">
                <Info size={20} className="mr-3 text-gymRed shrink-0 mt-1" />
                {ex.desc}
              </p>
              <button className="flex items-center text-gymRed font-black hover:translate-x-2 transition-transform w-fit">
                VIEW FORM VIDEO <ChevronRight size={20} className="ml-1" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StrengthTraining;
