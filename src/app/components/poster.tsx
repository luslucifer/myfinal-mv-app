import { CardMedia } from "@mui/material";
import { Movie } from "../data-storage/fuctions-data";
interface poster {
    obj : Movie
}

export default function Poster(props : poster){
const obj = props.obj

    return(
        <CardMedia
        component="img"
        src={`https://image.tmdb.org/t/p/original/${obj.poster_path}`}
        srcSet={`
https://image.tmdb.org/t/p/w92/${obj.poster_path} 92w,
https://image.tmdb.org/t/p/w154/${obj.poster_path} 154w,
https://image.tmdb.org/t/p/w185/${obj.poster_path} 185w,
https://image.tmdb.org/t/p/w342/${obj.poster_path} 342w,
https://image.tmdb.org/t/p/w500/${obj.poster_path} 500w,
https://image.tmdb.org/t/p/w780/${obj.poster_path} 780w,
https://image.tmdb.org/t/p/original/${obj.poster_path} 1080w
`}
        loading="lazy"
        alt={`tmdb poster of ${obj.title||obj.name}`}
        // style={{ width: "100%", height: "100%", objectFit: "cover" }}
        sx={{ heught: "100%", width: "100%", objectFit: "cover" }}
      />
    )
}