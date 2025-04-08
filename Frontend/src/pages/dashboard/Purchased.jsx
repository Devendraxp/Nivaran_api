import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../features/themeSlice';

const Purchased = () => {
  const theme = useSelector(selectTheme);
  
  // Mock purchased items
  const purchasedItems = [
    { id: 101, name: 'Premium Template', purchaseDate: '2025-03-15', status: 'Active' },
    { id: 102, name: 'UI Component Library', purchaseDate: '2025-02-28', status: 'Active' },
    { id: 103, name: 'Analytics Dashboard', purchaseDate: '2025-01-10', status: 'Expired' },
  ];
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Purchased Items</h1>
      
      <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-100'}`}>
        <table className="w-full">
          <thead className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-neutral-200'}`}>
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Purchase Date</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {purchasedItems.map((item) => (
              <tr key={item.id} className={`border-t ${theme === 'dark' ? 'border-neutral-700' : 'border-neutral-200'}`}>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.purchaseDate}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    item.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-4">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchased;