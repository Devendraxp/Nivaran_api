import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/themeSlice';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  const theme = useSelector(selectTheme);

  const categories = [
    {
      category: 'Cybersecurity',
      icon: '🔐',
      description:
        'Cybersecurity APIs offer tools for developers to bolster the security of their applications and systems.',
    },
    {
      category: 'Cryptography',
      icon: '🔏',
      description:
        'Cryptography APIs help developers implement encryption, decryption, hashing, and digital signatures.',
    },
    {
      category: 'Movies',
      icon: '🍿',
      description:
        'Movie APIs connect apps to movie databases for access to info like titles, ratings, trailers, and more.',
    },
    {
      category: 'Jobs',
      icon: '💼',
      description:
        'Jobs APIs provide access to job listings, salaries, companies, and recruiter tools for employment platforms.',
    },
    {
      category: 'Energy',
      icon: '⚡',
      description:
        'Energy APIs offer insights into consumption, sources, pricing, and sustainability metrics.',
    },
    {
      category: 'Monitoring',
      icon: '📡',
      description:
        'Monitoring APIs give access to logs, health checks, uptime tracking, and performance metrics.',
    },
    {
      category: 'Communication',
      icon: '📨',
      description:
        'APIs for messaging, email delivery, chat apps, telephony, and push notifications.',
    },
    {
      category: 'eCommerce',
      icon: '🛒',
      description:
        'eCommerce APIs provide product, pricing, payment, and order management functionalities.',
    },
  ];

  const cardStyle = `rounded-xl p-5 shadow-md transition-transform hover:scale-[1.02] ${
    theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-black'
  }`;

  return (
    <div className="p-6 md:p-10 w-full">
      <h1 className="text-3xl font-bold mb-8">Top Categories</h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div key={idx} className={cardStyle}>
            <h3 className="text-lg font-semibold">
              <span className="mr-2">{cat.icon}</span>
              {cat.category}
            </h3>
            <p className="text-sm mt-2 opacity-70">{cat.description}</p>
            <Link
              to={`/category/${encodeURIComponent(cat.category)}`}
              className="text-blue-600 text-sm hover:underline mt-3 inline-block"
            >
              Browse Category
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
