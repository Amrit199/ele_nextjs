import { Box, Typography, styled } from "@mui/material";
import React from "react";

const About = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        width: "50%",
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('lg')]: {
            width: '80%',  
        },
        [theme.breakpoints.down('md')]: {
            width: '80%',  
        },
        [theme.breakpoints.down('sm')]: {
            width: '95%',  
        }
    }))
  return (
    <Box>
        <CustomBox>

      <Typography variant="h4" textAlign={"center"}>About Us</Typography>
      <Typography variant="h6" textAlign={"center"}>
        Norway Electricity Prices is a free-to-do trade The Consumer Council,
        which makes it easy for you to compare prices and find the best deals.
      </Typography>
      <Typography>
        Once you have a deal on the Tights price, you can click on the link to
        the trauma company. We advise you to check that the agreement with the
        company votes overeins with information at Strømpris.no before you bind.
        It is a good idea to bid 3-4 minutes to change the trauma agreement and
        about 14 days before the new agreement comes into force.
      </Typography>
      <Typography>
        Straumfirmaa is obliged to report its agreements to Strømpris.no. Duty
        has a heimel in the regulations on reporting obligation for power supply
        agreements. Reporting is done by the company via ei eiga login. The
        company is a self-responsible for the fact that the contract is properly
        reported.
      </Typography>
      <Typography>
        NOTE! You enter into an agreement with the Consumer Council or
        Strømpris.no when you have a straum agreement in this tenesta, but with
        the straum company offering the agreement.
      </Typography>
        </CustomBox>
    </Box>
  );
};

export default About;
