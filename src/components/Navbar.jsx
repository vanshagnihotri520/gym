import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Male Training', path: '/male' },
    { name: 'Female Training', path: '/female' },
    { name: 'Zumba', path: '/zumba' },
    { name: 'Strength', path: '/strength' },
    { name: 'Calorie Meter', path: '/calories' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Dumbbell className="text-gymRed w-8 h-8" />
          <span className="text-2xl font-bold tracking-tighter">GYM <span className="text-gymRed">FREAKS</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => 
                `text-sm font-medium transition-colors hover:text-gymRed ${isActive ? 'text-gymRed' : 'text-gray-300'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link to="/join" className="bg-gymRed text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-red-700 transition-all">
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass py-6 flex flex-col items-center space-y-4"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `text-lg font-medium transition-colors hover:text-gymRed ${isActive ? 'text-gymRed' : 'text-gray-300'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
