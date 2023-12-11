// components/ProductCard.js
import React from 'react';
import { useRouter } from 'next/router';

const ProductCard = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/mainpage');
  };

  return (
    <div>
      <button
        className="bg-green-500 hover:bg-white text-white hover:text-green-500 font-bold py-2 px-4 rounded-full cursor-pointer"
        onClick={handleButtonClick}
      >
        Continue
      </button>
    </div>
  );
};

export default ProductCard;
