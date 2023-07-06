import React from 'react'
import { DataAuth } from '../context/DataProvider'
import moment from 'moment/moment'
import { Box, Button, Card, CardMedia, Link, Paper, Typography } from '@mui/material'


const title = ({ leto }) => {
  return (
      <Box p={4}>
        {leto && leto.map((item, index) => (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}} key={index}>
                <Typography variant='h3'>{item.title}</Typography>
                <Typography>{moment(item.publishedAt).utc().format("MMM DD, YYYY")}</Typography>
                <CardMedia sx={{height: "12rem"}} image={item.urlToImage}/>
                <Typography variant='h5'>{item.description}</Typography>
                <Typography variant='body1'>{item.content}</Typography>
                <Typography>Author: {item.author}</Typography>
                <Link href={item.url} underline='none' fontSize={"1.2rem"}>
                    click to read full story ....
                </Link>
            </Box>
            // <Card key={index}>
            //     <Typography>{item.title}</Typography>
            //     <Typography>{moment(item.publishedAt).utc().format("MMM DD, YYYY")}</Typography>
            //     <CardMedia sx={{height: "12rem"}} image={item.urlToImage}/>
            //     <Typography>{item.description}</Typography>
            //     <Typography>{item.content}</Typography>
            // </Card>
        ))}
    </Box>
  )
}

export async function getServerSideProps({ query }) {
    const { title } = query

    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${title}&apiKey=9932a81d52f24e0a941e532102c02251`)
        const data = await response.json()
        const news = data.articles.slice(0, 1)

        return {
            props: {
                leto: news
            }
        }
    } catch (error) {
        console.error(error)

        return {
            props: {
                leto: null
            }
        }
    }
}

export default title