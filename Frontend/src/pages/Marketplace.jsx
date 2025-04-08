import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';

const Marketplace = () => {
  const theme = useSelector(selectTheme);
  
  // Mock marketplace items
  const items = [
    { id: 1, name: 'Product 1', price: '$19.99', category: 'Software' },
    { id: 2, name: 'Product 2', price: '$29.99', category: 'Design' },
    { id: 3, name: 'Product 3', price: '$9.99', category: 'Tools' },
    { id: 4, name: 'Product 4', price: '$49.99', category: 'Premium' },
  ];
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Marketplace</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`p-4 rounded-lg transition-transform hover:scale-105 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-100'}`}
          >
            <div className={`h-32 mb-3 rounded ${theme === 'dark' ? 'bg-zinc-800' : 'bg-neutral-200'}`}></div>
            <h3 className="font-medium text-lg">{item.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-sm opacity-75">{item.category}</span>
              <span className="font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;