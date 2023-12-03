// pages/milk.js
import React from 'react';
import Card from '../../components/Card';

const MilkPage = () => {
  // Define your milk options
  const milkOptions = [
    {
      id: 1,
      title: 'Whole Milk',
      description: 'Rich and creamy',
      isSafe: true,
      image: 'milk1.jpg',
    },
    {
      id: 2,
      title: 'Skim Milk',
      description: 'Low-fat and lighter',
      isSafe: true,
      image: 'milk2.jpg',
    },
    // Add more milk options as needed
  ];

  return (
    <div>
      <h1>Milk Options</h1>
      <div className="flex flex-wrap">
        {milkOptions.map((option) => (
          <div
            key={option.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
          >
            <Card {...option} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilkPage;
