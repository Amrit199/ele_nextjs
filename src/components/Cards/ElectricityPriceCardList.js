import React, { useState, useEffect } from 'react';
import ElectricityPriceCard from './ElectricityPriceCard';
import { Grid, Container } from '@mui/material';

function ElectricityPriceCardList({ electro }) {
  const [data, setData] = useState([]);

  // Mock API data
  const mockData = [
    {
      id: 1,
      powerCompany: 'Agva Kraft',
      surcharge: -5.1,
      lastUpdated: '2023-04-20',
      monthlyPrice: 39,
      estimatedAvgExpenditure: 1462,
      nordpoolSpotPrice: 138.67,
      totalSpotPrice: 133.57,
      approxConsumption: 1066,
      estimatedElectricityExpenditure: 1462.35,
    },
    // Add more data here
  ];

  // Replace with your API call
  useEffect(() => {
    setData(electro);
  }, []);

  return (
    <>
      <Grid container spacing={4}>
        {data && data.map((rowData) => (
          <Grid item xs={12} sm={6} md={4} key={rowData.id}>
            <ElectricityPriceCard rowData={rowData} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ElectricityPriceCardList;
