import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import NewsCard from '@/src/components/Cards/NewsCard'
import HeaderNav from '@/src/components/Sections/HeaderNav'
import { DataAuth } from '../context/DataProvider'

const News = () => {
  const { data } = DataAuth()
  const news = data.slice(0, 15)
  console.log(data)
  return (
    <>
    <Box p={2}>
      <Typography variant='h4' textAlign={'center'} mb={3}>News</Typography>
      <Grid container rowSpacing={8} columnSpacing={4}>
        {news && news.map((item, index) => (
          <Grid item xs="12" md="4" key={index}>
            <NewsCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}

export default News