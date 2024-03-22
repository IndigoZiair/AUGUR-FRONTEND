import mockData from './mockData';
import React from 'react';
import DistributorCard from './DistributorCard';

const Dashboard = () => {
  return (
    <div>
      <h1>Augur Distributor Metrics</h1>
      {mockData.map(distributor => (
        <DistributorCard key={distributor.id} distributor={distributor} />
      ))}
    </div>
  );
};

export default Dashboard;
