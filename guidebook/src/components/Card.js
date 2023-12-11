// components/Card.js
import React from 'react';

const Card = ({ title, description, isSafe, image }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/backgrounds/Products2.jpeg')",
      }}
      className="p-4 m-2 border rounded-xl"
    >
      {/* Display the image */}
      {image && (
        <img
          src={`/backgrounds/${image}`} // Assuming images are in the 'public/background' folder
          alt={title}
          className="mb-2 rounded-md w-full"
        />
      )}

      <div className="">
        <h2 className="text-xl font-bold text-center">{title}</h2>
        {/* <p className="text-center">{description}</p> */}

        {/* Display safety status */}
        {isSafe ? (
          <span className="text-2xl flex justify-center">😊</span>
        ) : (
          <span className="text-2xl flex justify-center">😡</span>
        )}
      </div>
    </div>
  );
};

export default Card;
