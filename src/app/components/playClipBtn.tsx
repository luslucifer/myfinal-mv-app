'use client';
import { Button } from "@mui/material";
import { MyContext } from "./contextProvider";
import { useContext } from "react";
import { RootVideosM } from "./interface";
import { RootTrailerResponse } from "../data-storage/interfaces";

interface ClipBtnProps {
  key: string;
  variant: string;
  obj: RootVideosM;
  id: number;
  color:string
}

const ClipBtn: React.FC<ClipBtnProps> = (props) => {
  const { showTrailer, setShowTrailer, setYtKey, ytKey } = useContext(MyContext);

  const onClick = () => {
    setShowTrailer(true);

    if (props.obj !== undefined) {
      const key = props.obj.results.find((item) => item.type === 'Trailer');

      if (key) {
        setYtKey(key.key);
      }
    } else {
      fetch(`https://api.kinocheck.de/movies?tmdb_id=${props.id}&language=de&categories=Trailer`)
        .then((res) => res.json())
        .then((data) => {
          const res: RootTrailerResponse = data;
          const ytKey = res.trailer.youtube_video_id;
          setYtKey(ytKey);
        });
    }
  };

  return (
    <Button variant={props.variant} onClick={onClick} color={props.color}>
      Play Clip
    </Button>
  );
};

export default ClipBtn;
