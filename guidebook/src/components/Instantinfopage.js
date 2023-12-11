// InstantInfoPage.js
import React from 'react';
import Link from 'next/link';

const InstantInfoPage = ({ title, description, isRtl }) => {
  return (
    <div className="p-6">
      <div dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="container">
          <h1 className="text-xl font-bold mb-4">{title}</h1>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InstantInfoPage;
