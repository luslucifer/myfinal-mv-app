"use client";
import { Box } from "@mui/material";
import AnimePlayer from "./animePlayer";
import { AnimeInfo } from "./interface";
import { domain } from "@/app/anime/[[...id]]/page";
import { useEffect,useState } from "react";
import BasicTabs from "./toggleTabs";
interface PlayBox {
  subInfo: AnimeInfo;
  dubInfo: AnimeInfo;
}

export default function PlayBox(props: PlayBox) {

    const subInfo = props.subInfo
    const dubInfo = props.dubInfo
    const [epId,setEpId] = useState(subInfo.episodes[0].id)
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
      <BasicTabs infoSub={subInfo} infoDub={dubInfo} epId={epId} setEpID={setEpId} ></BasicTabs>
    </Box>
  );
}
