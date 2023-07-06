import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Divider,
  Chip,
} from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 12,
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  overflow: 'visible',
}));

const CardHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: theme.spacing(1),
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  borderRadius: 6,
}));

function ElectricityPriceCard({ rowData }) {
  return (
    <StyledCard>
      <CardContent>
        <CardHeader>
          <Typography variant="h5" component="div" gutterBottom>
            {rowData.companyName}
          </Typography>
          <StyledChip
            label={`${(rowData.products[0].addonPrice * 100).toFixed(2)} øre per kWh`}
            color="primary"
            size="small"
          />
        </CardHeader>
        <Divider />
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {rowData.products[0].priceUpdatedDate}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Monthly price: {rowData.products[0].monthlyFee},- kroner
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Estimated average power expenditure per month: {rowData.products[0].monthlyFee * 12},- kroner
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button href={rowData.url} size="small" variant="contained" color="primary">
          Details
        </Button>
      </CardActions>
      {/* <CardContent>
        <CardHeader>
          <Typography variant="h5" component="div" gutterBottom>
            {rowData.powerCompany}
          </Typography>
          <StyledChip
            label={`${rowData.surcharge.toFixed(2)} øre per kWh`}
            color="primary"
            size="small"
          />
        </CardHeader>
        <Divider />
        <Box mt={2}>
          <Typography variant="body2" color="text.secondary">
            Last updated: {rowData.lastUpdated}
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Monthly price: {rowData.monthlyPrice},- kroner
          </Typography>
          <Typography variant="h6" component="div" gutterBottom>
            Estimated average power expenditure per month: {rowData.estimatedAvgExpenditure},- kroner
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Details
        </Button>
      </CardActions> */}
    </StyledCard>
  );
}

export default ElectricityPriceCard;
