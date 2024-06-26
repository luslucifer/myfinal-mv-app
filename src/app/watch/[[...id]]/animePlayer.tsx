"use client";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { WatchList } from "./interface";
import { Stack } from "@mui/material";

interface AnimePlayerProps {
  url: string;
  obj: WatchList;
}

export default function AnimePlayer(props: AnimePlayerProps) {
  const obj = props.obj || {};
  const [url, setUrl] = useState(
    "https://www084.vipanicdn.net/streamhls/99886995750a29f143b54055f8a4ba3e/ep.1.1703869945.1080.m3u8"
  );
  const qualities = ["1080p", "720p", "480p", "360p", "default"];

useEffect(() => {
  if (obj.message === undefined && Object.keys(obj).length > 1) {
    let selectedQuality = null;

    // Loop through the available qualities in descending order
    for (let i = 0; i < qualities.length; i++) {
      const quality = qualities[i];

      // Find the first source with the selected quality
      const source = obj.sources.find((object) => object.quality === quality);

      if (source) {
        selectedQuality = source.url;
        break; // Stop the loop once a source is found
      }
    }

    if (selectedQuality) {
      setUrl(selectedQuality);
    } else {
      console.log('No available video formats');
    }
  } else {
    console.log('Error in response or unexpected data format');
  }
}, [obj]);

  return (
    <Stack justifyContent={"center"} alignContent={"center"} sx={{}}>
      <Stack
        sx={{
          height: { xs: "8rem", sm: "32rem" },
          // width: { xs: "100vw", sm: "80vw" },
        }}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <ReactPlayer
          url={url}
          height={"100%"}
          width={"100%"}
          controls
          light
          playing
        />
        {/* {JSON.stringify(obj)} */}
      </Stack>
    </Stack>
  );
}
