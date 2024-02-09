
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { Movie, formatDateToWords } from "../data-storage/fuctions-data";
import Link from "next/link";
import CircularProgressbarComponent from "./circularProgressBar";
import ClipBtn from "./playClipBtn";

interface PosterCard {
  obj: Movie;
  minWidth:string;
  isTv:boolean;
}

export default  function PosterCard(props: PosterCard) {
  function difiningMovieTv(){
    if(props.isTv || props.obj.media_type=="tv"){
      return 'tv'
    }
    else{
      return 'movie'
    }
  }
  const obj =  props.obj;
  if (!obj.title || obj.title==undefined){
    return null
  }
  const vote_average = Math.round(obj.vote_average*10)
  return (
    // <Link href={`/movie/${obj.title?.replace(/ /g, "-") + "-" + obj.id}`}>

      <Card sx={{ minWidth:props.minWidth }}>
        <CardActionArea>
        <Link href={`/${difiningMovieTv()}/${obj.title?.replace(/[ /]/g, "-")}-${obj.id}`}>
          <CardMedia
            component="img"
            height="20"
            alt="green iguana"
            srcSet={`
                  https://image.tmdb.org/t/p/w92/${obj.poster_path} 92w ,
                  https://image.tmdb.org/t/p/w154/${obj.poster_path} 154w,
                  https://image.tmdb.org/t/p/w185/${obj.poster_path} 185w,
                  https://image.tmdb.org/t/p/w342/${obj.poster_path} 342w,
                  https://image.tmdb.org/t/p/w500/${obj.poster_path} 500w,
                  https://image.tmdb.org/t/p/w780/${obj.poster_path} 780w
                  `}
            sizes="(max-width: 600px) 280px,
                  (max-width: 900px) 540px,
                  (max-width: 1200px) 800px,
                  (max-width: 1800px) 1200px,
                  1800px"
          />
    </Link>
          <CardContent>
            <Stack flexDirection={'row'} justifyContent={"space-between"} >
            <CircularProgressbarComponent number={vote_average}></CircularProgressbarComponent>
            <ClipBtn obj={undefined} id={obj.id} variant="contained" color='secondary'></ClipBtn>
            </Stack>
            <Typography gutterBottom variant="body1" component="div" align="center">
              {obj.title}
            </Typography>
            <Typography gutterBottom variant="body2">
              {formatDateToWords(obj.release_date)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
