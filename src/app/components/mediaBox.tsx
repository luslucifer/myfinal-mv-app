"use client";
import PosterCard from "./posterCard";
import { useEffect, useState } from "react";
import { MovieResponse } from "../data-storage/fuctions-data";
import CenteredTabs from "./tabs";
import { Box, Grid } from "@mui/material";

interface MediaBoxProps {
  popular: MovieResponse;
  trending: MovieResponse;
}

export default function MediaBox(props: MediaBoxProps) {
  const { popular, trending } = props;
  const [movieList, setMovieList] = useState(popular.results);
const [value,setNewValue] = useState(0)
useEffect(()=>{
    const navingList:void = value==0?setMovieList(popular.results):setMovieList(trending.results)
},[value])
  return (
    <Box>
      <Box className="moviebox">
        <Box className="buttons flex flex-row ">

          <CenteredTabs function={setNewValue} value={value}></CenteredTabs>
        </Box>
        <Grid container gap={0}>
          {movieList.map((obj, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} >
            <PosterCard minWidth="10rem"  obj={obj}></PosterCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
