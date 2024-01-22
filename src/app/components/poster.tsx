import { CardMedia } from "@mui/material";
interface poster {
    poster_path:string;
}

export default function Poster(props : poster){
    

    return(
        <CardMedia
        sx={{height:'100%'}}
            component="img"
            // height="20"
            alt="green iguana"
            srcSet={`
                  https://image.tmdb.org/t/p/w92/${props.poster_path} 92w ,
                  https://image.tmdb.org/t/p/w154/${props.poster_path} 154w,
                  https://image.tmdb.org/t/p/w185/${props.poster_path} 185w,
                  https://image.tmdb.org/t/p/w342/${props.poster_path} 342w,
                  https://image.tmdb.org/t/p/w500/${props.poster_path} 500w,
                  https://image.tmdb.org/t/p/w780/${props.poster_path} 780w
                  `}
            sizes="(max-width: 600px) 280px,
                  (max-width: 900px) 540px,
                  (max-width: 1200px) 800px,
                  (max-width: 1800px) 1200px,
                  1800px"
          />
    )
}