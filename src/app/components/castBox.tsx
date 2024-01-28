"use client";

import { useEffect, useState } from "react";
import { CreditM, Cast } from "./interface";
import { Typography, Box, Grid } from "@mui/material";

interface CastBox {
  Credit: CreditM;
}

export default function CastBox(props: CastBox) {
  const credits = props.Credit;
  const [width,setwidth]=useState()
  useEffect(() => {
    // Add any side effects or cleanup logic if needed
    
     setwidth(window.innerWidth)
    
  }, []);
  function showCasts(width) {
    if (width >= 650) {
      const res =
      credits.cast.length <= 15 ? (
        <Grid container spacing={1} sx={{}}>
          {credits.cast.map((obj: Cast, index: number) => (
            <Grid key={index} item xs={3}>
              <Typography variant="body1">{obj.name} </Typography>
              <Typography variant="body2">{obj.character} </Typography>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={1} sx={{}}>
          {credits.cast.slice(0, 15).map((obj: Cast, index: number) => (
            <Grid key={index} item xs={3}>
              <Typography variant="body1">{obj.name} </Typography>
              <Typography variant="body2">{obj.character} </Typography>
            </Grid>
          ))}
        </Grid>
      );
      
      return res;
    }
  }

  return <div>{showCasts(width)}</div>;
}
