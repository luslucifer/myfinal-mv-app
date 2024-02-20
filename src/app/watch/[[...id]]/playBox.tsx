"use client";
import { Box } from "@mui/material";
import AnimePlayer from "./animePlayer";
import { AnimeInfo } from "./interface";
import { domain } from "@/app/anime/[[...id]]/page";
import { useEffect,useState } from "react";
import EpRenderer from "./epRenderer";
interface PlayBox {
  info: AnimeInfo;
}

export default function PlayBox(props: PlayBox) {

    const info = props.info
    const [epId,setEpId] = useState(info.episodes[0].id)
    const [watchList,setWatchList] = useState({})
  useEffect(() => {
    fetch(domain + "anime/gogoanime/watch/"+epId).then(
      (res) => res.json()

    )
    .then((data)=>{
        setWatchList(data)
    })
    ;
  }, [epId]);

  return (
    <Box>
      <AnimePlayer obj={watchList}></AnimePlayer>
      <EpRenderer  info={info} epId={epId} setEpID={setEpId}></EpRenderer>
    </Box>
  );
}
