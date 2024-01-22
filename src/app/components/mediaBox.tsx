"use client";
import { Button } from "@mui/material";
import PosterCard from "./posterCard";
import { useEffect, useState } from "react";
import { MovieResponse, Movie } from "../data-storage/fuctions-data";
import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material";
import Tab from "@mui/material/Tab"
import CenteredTabs from "./tabs";

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
    <div>
      <div className="moviebox">
        <div className="buttons flex flex-row ">

          <CenteredTabs function={setNewValue} value={value}></CenteredTabs>
        </div>
        <div className="movieBox grid grid-cols-2">
          {movieList.map((obj, index) => (
            <PosterCard key={index} obj={obj}></PosterCard>
          ))}
        </div>
      </div>
    </div>
  );
}
