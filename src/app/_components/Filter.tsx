"use client";
import React, { useState } from 'react';

const CategoryMenubar = () => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'ai', label: 'AI' },
    { id: 'web3', label: 'Web 3' },
    { id: 'devops', label: 'Dev Ops' },
    { id: 'cybersecurity', label: 'Cyber Security' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'finance', label: 'Finance' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
    <div className='flex '>
        <h1 className='text-4xl font-semibold flex mx-7 '>Recent Blogs</h1>
        
    </div>
    <div className="w-full max-w-4xl justify-around mx-7 py-4"> 
        <h3 className='text-2xl font-normal'>Sort by category</h3>    
      <nav className="flex overflow-x-auto py-2 no-scrollbar">
        <ul className="flex space-x-2 sm:space-x-4">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    </>
  );
};

export default CategoryMenubar;