import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container sx={{ mt: 2, py: 3 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2023 Norway Electricity Prices
      </Typography>
    </Container>
  );
}

export default Footer;
