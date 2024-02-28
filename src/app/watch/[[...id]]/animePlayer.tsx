// Import necessary modules and components
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { WatchList } from "./interface";
import { Stack } from "@mui/material";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

// Interface for AnimePlayerProps
interface AnimePlayerProps {
  url: string;
  obj: WatchList;
}

// AnimePlayer component
const AnimePlayer = (props: AnimePlayerProps) => {
  const obj = props.obj || {};
  const [url, setUrl] = useState(
    "https://www084.vipanicdn.net/streamhls/99886995750a29f143b54055f8a4ba3e/ep.1.1703869945.1080.m3u8"
  );
  const qualities = ["1080p", "720p", "480p", "360p", "default"];
  const [add, setAdd] = useState(
    "https://www.profitablegatecpm.com/ws902875?key=4b055897bd078286dae0726381749165"
  );

  useEffect(() => {
    if (obj.message === undefined && Object.keys(obj).length > 1) {
      let selectedQuality = null;

      for (let i = 0; i < qualities.length; i++) {
        const quality = qualities[i];
        const source = obj.sources.find((object) => object.quality === quality);

        if (source) {
          selectedQuality = source.url;
          break;
        }
      }

      if (selectedQuality) {
        setUrl(selectedQuality);
      } else {
        console.log("No available video formats");
      }
    } else {
      console.log("Error in response or unexpected data format");
    }
  }, [obj]);

  

  return (
    <Stack justifyContent="center" alignContent="center" sx={{}}>
      <Stack
        sx={{
          aspectRatio: `${16 / 9}`,
        }}
        justifyContent="center"
        alignContent="center"
      >
        <ReactPlayer
          url={url}
          height="100%"
          width="100%"
          controls
          light
          playing
          playIcon={
            <Link href={`https://www.profitablegatecpm.com/ws902875?key=4b055897bd078286dae0726381749165`} target="_blank" style={{fontSize:'4rem'}}>
              <FaPlay></FaPlay>
            </Link>
          }
        />
      </Stack>
    </Stack>
  );
};

export default AnimePlayer;
