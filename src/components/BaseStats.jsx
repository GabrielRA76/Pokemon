// src/components/BaseStats.jsx
import React from 'react';

const BaseStats = ({ stats }) => (
  <div className="base-stats">
    <h4 className="base-stats-title">Base Stats</h4>
    {stats.map((stat, index) => (
      <div className="stat" key={index}>
        <span className="stat-info">{stat.name}</span>
        <span className="stat-percentage">{stat.value}</span>
        <div className="stat-bar">
          <div className="stat-fill" style={{ width: `${stat.value}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);

export default BaseStats;
