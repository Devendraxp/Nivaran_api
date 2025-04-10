import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectTheme } from '../features/themeSlice';
import { Link } from 'react-router-dom';


const categories = [
  { category: 'Business', count: 20055 },
  { category: 'Other', count: 6273 },
  { category: 'Advertising', count: 3755 },
  { category: 'Data', count: 3622 },
  { category: 'Tools', count: 3334 },
  { category: 'AI / Machine Learning', count: 2662 },
  { category: 'News / Media', count: 1256 },
  { category: 'Cybersecurity', count: 1085 },
  { category: 'Finance', count: 1029 },
  { category: 'Movies', count: 984 },
];

const dummyCategoryAPIs = {
  'Business': [
    { name: 'CRM Pro API', description: 'Manage leads and customer data.',  },
    { name: 'InvoiceMaster', description: 'Generate and manage invoices online.',  },
  ],
  'Cybersecurity': [
    { name: 'ThreatScan API', description: 'Real-time threat detection and reports.', },
    { name: 'PhishGuard', description: 'Phishing site detector and alerts.',  },
  ],
  'Movies': [
    { name: 'CineDB', description: 'Explore movies, actors, and ratings.',  },
    { name: 'TrailerFetch', description: 'Get trailers and movie teasers.',  },
  ],
};

const CategoryListing = () => {
  const theme = useSelector(selectTheme);
  const { categoryName } = useParams();
  const navigate = useNavigate();

  const filteredAPIs = dummyCategoryAPIs[categoryName] || [];

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      {/* Sidebar */}
      <div className={`w-64 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 shadow-md`}>
        <h2 className="text-xl font-semibold mb-4">Show APIs</h2>
        <div className="mb-4">
          <h3 className="font-medium mb-2">Category</h3>
          <ul className="space-y-2">
            {categories.map((cat, index) => (
              <li
                key={index}
                className={`flex justify-between cursor-pointer px-2 py-1 rounded 
                  ${cat.category === categoryName
                    ? 'bg-blue-100 text-blue-600 font-semibold'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                  }`}
                onClick={() => navigate(`/category/${cat.category}`)}
              >
                <span>{cat.category}</span>
                <span>{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Category: {categoryName}</h2>
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => navigate('/')}
          >
            Clear Filters
          </button>
        </div>

        {/* Grid of APIs */}
        {filteredAPIs.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-6">
            {filteredAPIs.map((api, index) => (
              <div
                key={index}
                className={`p-4 rounded-xl shadow hover:shadow-lg transition-all
                ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
              >
                <div className="text-sm text-blue-500 font-medium mb-2">{categoryName}</div>
                <h3 className="text-lg font-semibold mb-1">{api.name}</h3>
                <p className="text-sm mb-2">{api.description}</p>
                <div className="flex justify-between text-xs text-gray-500">
               <Link
                            to={`/api/${encodeURIComponent(api.name)}`}
                            className="text-blue-500 text-sm hover:underline mt-3 inline-block"
                          >
                            see more
                          </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 mt-10">No APIs found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryListing;
