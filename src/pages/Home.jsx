import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            TRANSFORM YOUR <span className="text-gymRed">BODY</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            "Transform Your Body. Build Your Power." Join the elite community of fitness enthusiasts.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6"
          >
            <Link to="/male" className="bg-gymRed text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center group">
              MALE SECTION <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/female" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all flex items-center justify-center group">
              FEMALE SECTION <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gymDark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="text-gymRed w-12 h-12" />, title: "High Intensity", desc: "Experience workouts designed to push your limits.", path: "/strength" },
              { icon: <Target className="text-gymRed w-12 h-12" />, title: "Goal Focused", desc: "Tailored plans for weight gain or fat loss.", path: "/male" },
              { icon: <TrendingUp className="text-gymRed w-12 h-12" />, title: "Track Progress", desc: "Monitor your calories and workout streaks with ease.", path: "/calories" }
            ].map((feature, i) => (
              <Link to={feature.path} key={i}>
                <motion.div 
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass p-10 rounded-3xl h-full border border-white/5 hover:border-gymRed/50 transition-all cursor-pointer"
                >
                  <div className="mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
