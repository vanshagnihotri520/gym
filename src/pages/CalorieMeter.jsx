import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash2, Calculator, Utensils } from 'lucide-react';

const CalorieMeter = () => {
  const [foods, setFoods] = useState([
    { id: 1, name: 'Egg', calories: 70 },
    { id: 2, name: 'Rice (1 bowl)', calories: 200 },
    { id: 3, name: 'Chicken Breast (100g)', calories: 250 },
    { id: 4, name: 'Milk (1 glass)', calories: 150 },
  ]);

  const [diet, setDiet] = useState([]);
  const [customFood, setCustomFood] = useState({ name: '', calories: '' });

  const totalCalories = diet.reduce((sum, item) => sum + item.calories, 0);

  const addToDiet = (food) => {
    setDiet([...diet, { ...food, entryId: Date.now() }]);
  };

  const removeFromDiet = (entryId) => {
    setDiet(diet.filter(item => item.entryId !== entryId));
  };

  const handleAddCustom = (e) => {
    e.preventDefault();
    if (customFood.name && customFood.calories) {
      const newFood = {
        id: Date.now(),
        name: customFood.name,
        calories: parseInt(customFood.calories)
      };
      setFoods([...foods, newFood]);
      setCustomFood({ name: '', calories: '' });
    }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-black mb-4">CALORIE <span className="text-gymRed">METER</span></h1>
        <p className="text-gray-400">Track your daily intake and reach your goals faster.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Food List */}
        <div className="lg:col-span-1">
          <div className="glass p-8 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Utensils className="mr-2 text-gymRed" /> QUICK ADD
            </h2>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {foods.map(food => (
                <div key={food.id} className="flex justify-between items-center bg-white bg-opacity-5 p-4 rounded-xl hover:bg-opacity-10 transition-all">
                  <div>
                    <p className="font-bold">{food.name}</p>
                    <p className="text-sm text-gray-400">{food.calories} kcal</p>
                  </div>
                  <button 
                    onClick={() => addToDiet(food)}
                    className="bg-gymRed p-2 rounded-lg hover:scale-110 transition-transform"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              ))}
            </div>

            <form onSubmit={handleAddCustom} className="mt-8 space-y-4">
              <h3 className="font-bold text-gray-300">ADD CUSTOM FOOD</h3>
              <input 
                type="text" 
                placeholder="Food name" 
                value={customFood.name}
                onChange={(e) => setCustomFood({...customFood, name: e.target.value})}
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 focus:border-gymRed outline-none transition-all"
              />
              <input 
                type="number" 
                placeholder="Calories" 
                value={customFood.calories}
                onChange={(e) => setCustomFood({...customFood, calories: e.target.value})}
                className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl px-4 py-3 focus:border-gymRed outline-none transition-all"
              />
              <button className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-gymRed hover:text-white transition-all">
                SAVE FOOD
              </button>
            </form>
          </div>
        </div>

        {/* Daily Summary */}
        <div className="lg:col-span-2">
          <div className="glass p-8 rounded-3xl h-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold flex items-center">
                <Calculator className="mr-2 text-gymRed" /> DAILY LOG
              </h2>
              <div className="text-right">
                <p className="text-sm text-gray-400">TOTAL CONSUMED</p>
                <p className="text-4xl font-black text-gymRed">{totalCalories} <span className="text-lg text-white font-normal uppercase">kcal</span></p>
              </div>
            </div>

            {diet.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-gray-500 border-2 border-dashed border-white border-opacity-10 rounded-3xl">
                <Utensils size={48} className="mb-4 opacity-20" />
                <p>Your daily log is empty. Start adding foods!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {diet.map(item => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={item.entryId} 
                    className="flex justify-between items-center bg-white bg-opacity-5 p-5 rounded-2xl"
                  >
                    <div>
                      <p className="font-bold text-lg">{item.name}</p>
                      <p className="text-gymRed font-mono">{item.calories} kcal</p>
                    </div>
                    <button 
                      onClick={() => removeFromDiet(item.entryId)}
                      className="text-gray-500 hover:text-gymRed transition-colors"
                    >
                      <Trash2 size={24} />
                    </button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieMeter;
