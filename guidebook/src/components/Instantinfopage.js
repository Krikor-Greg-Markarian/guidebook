// InstantInfoPage.js
import React from 'react';
import Link from 'next/link';

const InstantInfoPage = ({ title, description, isRtl }) => {
  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container p-5">
        <h1 className="text-xl font-bold mb-4">{title}</h1>
        <p className='className="text-sm"'>{description}</p>
      </div>
    </div>
  );
};

export default InstantInfoPage;
