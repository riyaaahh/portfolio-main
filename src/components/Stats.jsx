// src/Stats.js
import React, { useEffect, useState } from 'react';

const Stats = () => {
  const [stats, setStats] = useState({
    portfoliosUploaded: 15,
    userCount: 15,
    otherStatistic: 20,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('http://localhost:3000/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    }

    fetchStats();
  }, []);

  return (
    <div className="bg-white pb-14 border-y-2 border-black">
      <div className="max-w-7xl mx-auto px-4  text-center my-4">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Statistics</h2>
        <div className="flex justify-center space-x-8">
          <div className="stat px-10 bg-white p-6 border-2 border-black rounded-lg shadow-md">
            <h3 className="text-3xl font-bold text-green-600" id="portfoliosUploaded">{stats.portfoliosUploaded}+</h3>
            <p className="text-black font-semibold">Portfolios</p>
          </div>
          <div className="stat px-10 bg-white p-6 border-2 border-black rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-green-600"  id="userCount">{stats.userCount}+</h3>
            <p className="text-black font-semibold">User Count</p>
          </div>
          <div className="stat px-10 bg-white p-6 border-2 border-black rounded-lg shadow-md">
          <h3 className="text-3xl font-bold text-green-600"  id="otherStatistic">{stats.otherStatistic}+</h3>
            <p className="text-black font-semibold">Sponsorship</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
