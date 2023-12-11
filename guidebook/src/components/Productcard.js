// components/ProductCard.js
import React from 'react';
import { useRouter } from 'next/router';

const ProductCard = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/infopage');
  };

  return (
    <div
      style={{ backgroundImage: "url('/backgrounds/Gfbackground.jpeg')" }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-r from-teal-500 to-indigo-500 text-white                  "
    >
      <div className="mb-10 pr-10 bg-gradient-to-r from-gray-200 to-gray-400  text-center p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-black">
          GLUTEN FREE PRODUCTS
        </h1>
        <p className="text-lg mb-6 text-black">
          Lebanese Celiac Community / December 2023
        </p>
        <button
          targetRoute="/infopage"
          className="bg-green-500 hover:bg-white text-white hover:text-green-400 font-bold py-2 px-4 rounded-full cursor-pointer"
          onClick={handleButtonClick}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
