// components/Gfshopscard.js

import React from 'react';

const Gfshopscard = ({ data }) => {
  return (
    <div className="pt-12">
      <div className="pt-12 flex rounded-xl p-8 shadow-md bg-gray-100 p-6 mb-4">
        {/* Left Column - Picture */}
        <div className="flex-shrink-0 flex items-center">
          <img
            src={data.picture}
            alt={data.name}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Right Column - Name, Telephone, Description */}
        <div className="ml-20">
          <h2 className="text-xl font-bold mb-2">{data.name}</h2>
          <p className="text-gray-600 mb-2">{data.phoneNumber}</p>

          {/* Bullet Point Description */}
          <ul className="list-disc pl-5">
            {data.description.map((point, index) => (
              <li key={index} className="mb-1">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gfshopscard;
