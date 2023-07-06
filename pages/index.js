import React from 'react'
import { Box, Card, CardActionArea, Container, Typography } from '@mui/material'
import Main from '@/src/pages/Main'
import LatestNews from '@/src/components/Cards/LatestNews'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
  // const [showResults, setShowResults] = React.useState(false);

  // const handleCheckPrice = (city, consumption, onComplete) => {
  //   // Simulate a delay of 2 seconds before displaying the results
  //   setTimeout(() => {
  //     setShowResults(true);
  //     onComplete();
  //   }, 2000);
  // };

  return (
    <>
      <Container maxWidth="xl">
        <Main/>
        {/* <SearchForm onCheckPrice={handleCheckPrice}  />
        {showResults && <ElectricityPriceCardList />} */}
        <LatestNews/>
        <Box>
          <Typography variant='h4' my={4}>Help and advice</Typography>
          <Box display={'flex'} flexWrap={'wrap'} gap={4}>
            <Card>
              <CardActionArea href='/Frequently-asked-questions' sx={{px: 3, py: 4, display: 'flex', flexDirection: 'row', gap: 4 }}>
                <Typography variant='h5'>Frequently asked questions</Typography>
                <ArrowForwardIosIcon />
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea href='/About' sx={{px: 3, py: 4, display: 'flex', flexDirection: 'row', gap: 4 }}>
                <Typography variant='h5'>About us</Typography>
                <ArrowForwardIosIcon />
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Container>
    </>
  )
}
