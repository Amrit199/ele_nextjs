import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import TimelineIcon from "@mui/icons-material/Timeline";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Main = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Every scientistystem has a tab open to Stack Overflow",
    "Every adminmobile has a tab open to Stack Overflow",
    "Every developergame has a tab open to Stack Overflow",
    "Every developer has a tab open to Stack Overflow",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentText = texts[textIndex];

  const wordVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <Box sx={{ margin: 3, color: "black" }}>
      {/* background: "#383d42" */}
      <Box
      py={6}
        sx={{ display: "flex", flexDirection: "column", width: "100%", alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 8 }}
      >
        <Box display={"flex"} gap={6} flexDirection={{xs: "column", md: "row"}} alignItems={"center"} justifyContent={"center"}>
          <Card sx={{maxWidth: 400, textAlign: "center", background: "#fee3cd", padding: 3 }}>
            <CardContent>
              <CompareArrowsIcon fontSize="large" color="warning" />
              <Typography variant="h4">Compare</Typography>
              <Typography variant="body2">
                Find and compare the best power deals on the market. Get a
                better price and change today.
              </Typography>
            </CardContent>
            <Button href="/Compare" size="large" color="warning" variant="contained">
              I want to compare prices
            </Button>
          </Card>
          <Card sx={{maxWidth: 400, textAlign: "center", background: "#cde9fe", padding: 3 }}>
            <CardContent>
              <TimelineIcon fontSize="large" color="primary" />
              <Typography variant="h4">Spot prices</Typography>
              <Typography variant="body2">
                We show you the spot price hour by hour from the Nordpool power
                exchange.
              </Typography>
            </CardContent>
            <Link href="Compare">
              <Button size="large" color="primary" variant="contained">
                I want to see the spot prices
              </Button>
            </Link>
          </Card>
        </Box>
        <Box>
          <Typography variant="h2">Check electricity prices</Typography>
          <Typography variant="h6" component="body1">
            We monitor the market and show the best power deals for you.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
