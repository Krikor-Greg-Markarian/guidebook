import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-500 to-indigo-500 p-8">
      <div className="container mx-auto flex flex-wrap justify-around text-white">
        {/* Column 1 */}
        <div className="flex flex-col mb-8">
          <h2 className="text-lg font-semibold mb-4">Nisrine</h2>
          <p>Email: nisrine@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Instagram: @nisrine_insta</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col mb-8">
          <h2 className="text-lg font-semibold mb-4">Elie</h2>
          <p>Email: elie@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Instagram: @elie_insta</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col mb-8">
          <h2 className="text-lg font-semibold mb-4">Nathalie</h2>
          <p>Email: nathalie@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Instagram: @nathalie_insta</p>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col mb-8">
          <h2 className="text-lg font-semibold mb-4">Hiba</h2>
          <p>Email: hiba@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Instagram: @hiba_insta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
