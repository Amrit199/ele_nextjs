import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { DataAuth } from "@/pages/context/DataProvider";
import { useRouter } from "next/router";


const NewsCard = ({ data }) => {
  let longTitle = data.title.split(" ");
  let shortTitle = longTitle.slice(0, 9).join(" ");
  let longContent = data.description.split(" ")
  let shortContent = longContent.slice(0, 30).join(" ")
  const { setLeto } = DataAuth()
  const router = useRouter()

  const handleCLick= (e) => {
    e.preventDefault()
    setLeto(data)
    localStorage.setItem(setLeto, data)
    router.push(`/News/${data.title}`)
  }
  return (
    <Card sx={{ maxHeight: '22rem'}}>
      <CardActionArea onClick={handleCLick}>
        <CardMedia sx={{ height: "12rem" }} image={data.urlToImage} />
        <CardContent>
          <Typography variant="h6" sx={{ mb: 1}}>
            {shortTitle}
          </Typography>
          <Typography variant="body1">
            {shortContent}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
