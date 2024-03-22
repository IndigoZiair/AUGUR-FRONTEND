
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const DistributorCard = ({ distributor }) => {
  return (
    <Card>
      <h2>{distributor.name}</h2>
      <p>Quantity shipped last month: {distributor.shippedLastMonth}</p>
      <p>Forecasted quantity to ship next month: {distributor.forecastedToShipNextMonth}</p>
      <p>Year-to-date average goods shipped per month: {distributor.ytdAverage}</p>
    </Card>
  );
};

export default DistributorCard;
