import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Autocomplete,
  LinearProgress,
} from '@mui/material';

const cities = [
  // Add your list of cities here
  'Oslo',
  'Bergen',
  'Trondheim',
  'Stavanger',
];

function SearchForm({ onCheckPrice }) {
  const [city, setCity] = useState('Oslo');
  const [consumption, setConsumption] = useState('16000');
  const [consumptionError, setConsumptionError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckPrice = () => {
    if (consumption === '') {
      setConsumptionError(true);
      return;
    }

    setLoading(true);
    onCheckPrice(city, consumption, () => setLoading(false));
  };

  const handleConsumptionChange = (e) => {
    setConsumption(e.target.value);
    if (e.target.value !== '') {
      setConsumptionError(false);
    }
  };

  return (
    <Box sx={{ my: 4 }}>
      <Autocomplete
        value={city}
        onChange={(event, newValue) => setCity(newValue)}
        options={cities}
        renderInput={(params) => (
          <TextField {...params} label="City" fullWidth />
        )}
      />
      <TextField
        value={consumption}
        onChange={handleConsumptionChange}
        label="Annual consumption (kWh)"
        type="number"
        fullWidth
        sx={{ mt: 2 }}
        error={consumptionError}
        helperText={consumptionError ? 'Please enter your annual consumption' : ''}
      />
      <Button
        onClick={handleCheckPrice}
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Check Price
      </Button>
      {loading && <LinearProgress sx={{ mt: 2 }} />}
    </Box>
  );
}

export default SearchForm;
