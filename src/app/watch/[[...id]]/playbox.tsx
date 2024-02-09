"use client";
import { Box, Grid, Typography,Button } from "@mui/material";
import AnimePlayer from "./animePlayer";
import { AnimeInfo, WatchList } from "./interface";
import { useEffect, useState } from "react";
import BasicTabs from "./subOrDubTabs";

interface PlayBox {
  dubObj: AnimeInfo;
  subObj: AnimeInfo;
  domain: string;
}

export default function PlayBox(props: PlayBox) {
  const domain = props.domain;
  const dubObj = props.dubObj;
  const subObj = props.subObj;
  const [isDub, setIsDub] = useState(true);
  const [epList, setEpList] = useState(subObj.episodes);
  const [epId, setEpId] = useState('');
  const [watchList,setWatchList] = useState(null)


  useEffect(()=>{

      try {
          setEpId(subObj.episodes[0].id||'shingeki-no-kyojin-episode-23')

        } catch (error) {
            console.error(error)
        }
        
    },[])
    
    useEffect(()=>{
      fetch(domain+'watch/'+epId).then(data=>data.json()).then(data=>{setWatchList(data)})

  },[epId])



  
  return (
    <Box>
      <AnimePlayer  obj={watchList} ></AnimePlayer>
      <Box className="episodeBox">
        <BasicTabs
        infoSub={subObj}
        infoDub={dubObj}
        setEpID={setEpId}
        epId={epId}
        >
        </BasicTabs>
      </Box>
    </Box>
  );
}
