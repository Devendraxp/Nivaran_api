import React, { useState } from 'react';

const ApiPage = () => {
  const [activeTab, setActiveTab] = useState('App');

  const apiData = {
    name: 'CineDB',
    description: 'Explore movies, actors, and ratings.',
    category: 'Movies',
    tags: ['cinema', 'ratings', 'films'],
    baseUrl: 'https://cineapi.example.com',
    availableRoute: ['/search', '/top-rated', '/actor/:id'],
    applicableFilter: ['genre', 'year'],
    termsOfUse: 'https://cineapi.example.com/terms',
    visibility: true,
    isLive: true,
    docs: 'https://cineapi.example.com/docs.md',
    suscriptionPerMonth: 10,
    suscriptionQuater: 25,
    suscriptionPerHalfYear: 45,
    suscriptionPerYear: 80,
    isPaid: true,
    isSecured: true,
    rateLimit: 1000,
    icon: '🎬',
  };

  const tabs = ['App', 'Params', 'Headers', 'Body', 'Auth'];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-6">
        <h2 className="text-xl font-semibold mb-4">Endpoints</h2>
        <ul className="space-y-2 text-sm">
          {apiData.availableRoute.map((route, index) => (
            <li key={index} className="text-blue-600 hover:underline cursor-pointer">
              GET {route}
            </li>
          ))}
        </ul>
      </div>

      {/* Main section */}
      <div className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold">{apiData.icon} {apiData.name}</h1>
          <p className="text-gray-600">{apiData.description}</p>
          <p className="text-sm text-gray-500 mt-1">Category: {apiData.category}</p>
        </div>

        {/* Tabs */}
        <div className="mb-4 border-b">
          <nav className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 border-b-2 text-sm font-medium ${
                  activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent hover:text-blue-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-md p-4 shadow-md">
          {activeTab === 'App' && (
            <div>
              <p><strong>Base URL:</strong> {apiData.baseUrl}</p>
              <p><strong>Docs:</strong> <a href={apiData.docs} className="text-blue-600 underline" target="_blank" rel="noreferrer">View Documentation</a></p>
              <p><strong>Rate Limit:</strong> {apiData.rateLimit} req/min</p>
              <p><strong>Secured:</strong> {apiData.isSecured ? 'Yes' : 'No'}</p>
              <p><strong>Live:</strong> {apiData.isLive ? 'Yes' : 'No'}</p>
              <p><strong>Tags:</strong> {apiData.tags.join(', ')}</p>
              <p><strong>Filters:</strong> {apiData.applicableFilter.join(', ')}</p>
              <p><strong>Terms:</strong> <a href={apiData.termsOfUse} className="text-blue-600 underline">View Terms</a></p>
            </div>
          )}

          {activeTab === 'Params' && (
            <div>
              <p className="text-sm text-gray-500">This section will show accepted parameters (e.g. genre, year).</p>
            </div>
          )}

          {activeTab === 'Headers' && (
            <div>
              <p className="text-sm text-gray-500">Include headers like <code>X-API-Key</code> and <code>Content-Type</code>.</p>
            </div>
          )}

          {activeTab === 'Body' && (
            <div>
              <p className="text-sm text-gray-500">Show body content for POST requests here.</p>
            </div>
          )}

          {activeTab === 'Auth' && (
            <div>
              <p className="text-sm text-gray-500">Authentication method: API Key via header <code>X-API-Key</code>.</p>
            </div>
          )}
        </div>

        {/* Example Request */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Example Request</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
{`curl --request GET \\
  --url ${apiData.baseUrl}/search \\
  --header 'X-API-Key: YOUR_API_KEY'`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
