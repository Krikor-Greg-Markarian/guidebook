// components/Card.js
import React from 'react';

const Card = ({ title, description, isSafe, image }) => {
  return (
    <div className="bg-white p-4 m-2 border rounded-md">
      {/* Display the image */}
      {image && (
        <img
          src={`/backgrounds/${image}`} // Assuming images are in the 'public/background' folder
          alt={title}
          className="mb-2 rounded-md w-full"
        />
      )}

      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>

      {/* Display safety status */}
      {isSafe ? (
        <span className="text-green-500 text-2xl">😊</span>
      ) : (
        <span className="text-red-500 text-2xl">😡</span>
      )}
    </div>
  );
};

export default Card;
