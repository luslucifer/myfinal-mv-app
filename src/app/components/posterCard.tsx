
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Stack } from "@mui/material";
import { Movie, formatDateToWords } from "../data-storage/fuctions-data";
import Link from "next/link";
import CircularProgressbarComponent from "./circularProgressBar";
import ClipBtn from "./playClipBtn";
import Image from "next/image";


interface PosterCard {
  obj: Movie;
  isTv:boolean;
}

export default  function PosterCard(props: PosterCard) {

  const animeGere = props.obj.genre_ids.includes(16)


  function difiningMovieTv(){
    if(props.isTv || props.obj.media_type=="tv"){
      if(animeGere){
        return 'anime'
      }
      else{
        return 'tv'
      }

    }
  
    else{
      return 'movie'
    }
  }
  const obj =  props.obj;

  if(!props.isTv){
    if (!obj.title || obj.title==undefined){
      return null
    }
  }
  const vote_average = Math.round(obj.vote_average*10)

  const title = props.obj.title != undefined ? props.obj.title : props.obj.name
  return (
    // <Link href={`/movie/${obj.title?.replace(/ /g, "-") + "-" + obj.id}`}>

      <Card sx={{minWidth:'12rem',maxWidth:'12rem'}}>
        <CardActionArea>
        <Link href={`/${difiningMovieTv()}/${title?.replace(/[ /]/g, "-")}-${obj.id}`}>
          <Box sx={{position:'relative',aspectRatio:`${2000/3000 }` , width:'100%'}}>
          <Image src={ `https://image.tmdb.org/t/p/original/${obj.poster_path}`} layout="fill" objectFit="cover" alt={`tmdb poster of ${title}`}></Image>
          </Box>
    </Link>
          <CardContent>
            <Stack flexDirection={'row'} justifyContent={"space-between"} >
            <CircularProgressbarComponent number={vote_average}></CircularProgressbarComponent>
            <ClipBtn obj={undefined} id={obj.id} variant="contained" color='secondary'></ClipBtn>
            </Stack>
            <Typography gutterBottom variant="body1" component="div" align="center">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2">
              {formatDateToWords(obj.release_date||obj.first_air_date)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}
