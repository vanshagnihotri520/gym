import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Shield, Zap } from 'lucide-react';

const JoinSection = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹999',
      features: ['Basic Gym Access', 'Locker Room', '1 Fitness Assessment', 'Community Support'],
      icon: <Zap className="text-blue-400" size={32} />,
      btnClass: 'bg-white/10 hover:bg-white/20 text-white'
    },
    {
      name: 'Pro',
      price: '₹1,999',
      popular: true,
      features: ['All Starter Features', 'Personal Trainer (2/mo)', 'Nutrition Guide', 'Group Classes', 'Shower Facilities'],
      icon: <Star className="text-gymRed" size={32} />,
      btnClass: 'bg-gymRed text-white hover:bg-red-700'
    },
    {
      name: 'Elite',
      price: '₹2,999',
      features: ['All Pro Features', 'Unlimited PT', 'Custom Diet Plans', 'Spa & Massage', 'Guest Passes'],
      icon: <Shield className="text-yellow-400" size={32} />,
      btnClass: 'bg-white/10 hover:bg-white/20 text-white'
    }
  ];

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="text-gymRed font-black tracking-widest text-sm uppercase mb-4 block">MEMBERSHIP</span>
        <h1 className="text-6xl font-black mb-6">CHOOSE YOUR <span className="text-gymRed">POWER</span></h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Join the Gym Freaks elite community. Select a plan that fits your ambition and start your transformation today.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass p-10 rounded-[3rem] relative flex flex-col ${plan.popular ? 'border-gymRed border-opacity-50 scale-105 z-10' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gymRed text-white px-4 py-1 rounded-full text-xs font-black tracking-widest">
                MOST POPULAR
              </div>
            )}
            
            <div className="mb-8">{plan.icon}</div>
            <h3 className="text-3xl font-black mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className="text-gray-500 ml-2">/month</span>
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center text-gray-300">
                  <Check className="text-gymRed mr-3" size={18} />
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 rounded-2xl font-black transition-all transform hover:scale-[1.02] ${plan.btnClass}`}>
              SELECT PLAN
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 glass p-12 rounded-[3.5rem] flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-black mb-2">NOT SURE?</h2>
          <p className="text-gray-400">Get a 3-day free pass and experience the energy yourself.</p>
        </div>
        <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-all">
          GET FREE PASS
        </button>
      </div>
    </div>
  );
};

export default JoinSection;
