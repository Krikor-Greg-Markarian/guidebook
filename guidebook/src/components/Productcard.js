// components/ProductCard.js
import React from 'react';
import { useRouter } from 'next/router';

const ProductCard = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/mainpage');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
      <div className="text-center p-8 bg-white rounded-md shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">Product Title</h1>
        <p className="text-lg mb-6 text-black">
          Product description goes here.
        </p>
        <button
          className="bg-green-500 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={handleButtonClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
