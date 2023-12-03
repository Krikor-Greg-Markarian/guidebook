import React, { useState } from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    title: 'Milk',
    description: 'Fresh and nutritious',
    isSafe: false,
    image: '111.jpg',
  },
  {
    title: 'Cheese',
    description: 'Delicious and savory',
    isSafe: true,
    image: '111.jpg',
  },
  {
    title: 'Chocolate',
    description: 'Sweet and indulgent',
    isSafe: true,
    image: '111.jpg',
  },
  {
    title: 'Yogurt',
    description: 'Creamy and rich',
    isSafe: true,
    image: '111.jpg',
  },
  {
    title: 'Chips',
    description: 'Crunchy and flavorful',
    isSafe: true,
    image: '111.jpg',
  },
  {
    title: 'Ice Cream',
    description: 'Cold and delightful',
    isSafe: true,
    image: '111.jpg',
  },
];

const unsortedCategories = ['Milk', 'Cheese', 'Chocolate', 'Yogurt', 'Chips'];

// Sort categories in ascending order (A to Z)
const categories = unsortedCategories
  .slice()
  .sort((a, b) => a.localeCompare(b));

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full p-4">
        {' '}
        {/* Update this line */}
        {/* Add search bar */}
        <Navbar />
        <div className="flex mb-4 pt-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-l-md flex-1"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Render categories with links */}
        <div className="w-1/4 p-4">
          <h2 className="text-lg font-bold mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="cursor-pointer hover:underline">
                <Link href={`/categories/${category.toLowerCase()}`}>
                  <div>{category}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Render filtered cards based on the screen size */}
        <div className="flex flex-wrap">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4 xl:w-1/4 p-2"
            >
              <Card {...product} />
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
