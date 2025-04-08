import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../features/themeSlice';

const Published = () => {
  const theme = useSelector(selectTheme);
  
  // Mock published items
  const publishedItems = [
    { id: 201, name: 'React Component Library', publishDate: '2025-04-01', sales: 152, revenue: '$1,520' },
    { id: 202, name: 'Dashboard Template', publishDate: '2025-03-15', sales: 89, revenue: '$2,670' },
    { id: 203, name: 'Icon Pack', publishDate: '2025-02-20', sales: 325, revenue: '$3,250' },
  ];
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Published Items</h1>
      
      <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-zinc-900' : 'bg-neutral-100'}`}>
        <table className="w-full">
          <thead className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-neutral-200'}`}>
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4">Publish Date</th>
              <th className="text-left p-4">Sales</th>
              <th className="text-left p-4">Revenue</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {publishedItems.map((item) => (
              <tr key={item.id} className={`border-t ${theme === 'dark' ? 'border-neutral-700' : 'border-neutral-200'}`}>
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.publishDate}</td>
                <td className="p-4">{item.sales}</td>
                <td className="p-4">{item.revenue}</td>
                <td className="p-4">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">
                    Delete
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

export default Published;