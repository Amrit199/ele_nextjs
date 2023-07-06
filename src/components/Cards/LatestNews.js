import { DataAuth } from "@/pages/context/DataProvider";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NewsCard from "./NewsCard";
import Link from "next/link";

const LatestNews = () => {
  const { data } = DataAuth();
  const news = data.slice(0, 3);
  console.log(news);
  return (
    
    <Box py={2}>
      <Typography variant="h4" my={3}>
        Latest News
      </Typography>
      <Grid container rowSpacing={3} columnSpacing={4}>
        {news &&
          news.map((item, index) => (
            <Grid item xs="12" md="4" key={index}>
              <NewsCard data={item} />
              {/* <BlogsCard key={item.id} data={item} /> */}
            </Grid>
          ))}
      </Grid>
      <Box my={4} sx={{display: "flex", alignContent: "center", justifyContent: 'center'}}>
        <Link href={"/News"}>
          <Button size="large" variant="outlined">See all news</Button>

        </Link>
      </Box>
    </Box>
  );
};

export default LatestNews;
