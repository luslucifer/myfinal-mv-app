import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, CardMedia, Stack } from "@mui/material";
import { Movie, formatDateToWords } from "../data-storage/fuctions-data";
import Link from "next/link";
import CircularProgressbarComponent from "./circularProgressBar";
import ClipBtn from "./playClipBtn";

interface PosterCard {
  obj: Movie;
  isTv: boolean;
}

export default function PosterCard(props: PosterCard) {
  const animeGere = props.obj.genre_ids.includes(16);

  function definingMovieTv() {
    if (props.isTv || props.obj.media_type == "tv") {
      return animeGere ? "anime" : "tv";
    } else {
      return "movie";
    }
  }

  const obj = props.obj;

  if (!props.isTv) {
    if (!obj.title || obj.title === undefined) {
      return null;
    }
  }
  const vote_average = Math.round(obj.vote_average * 10);

  const title =
    props.obj.title !== undefined ? props.obj.title : props.obj.name;

  return (
    <Card sx={{ minWidth: "12rem", maxWidth: "12rem" }}>
      <CardActionArea>
        <Link
          href={`/${definingMovieTv()}/${title?.replace(/[ /]/g, "-")}-${
            obj.id
          }`}
        >
          <Box
            sx={{
              position: "relative",
              aspectRatio: `${2000 / 3000}`,
              width: "100%",
              backgroundImage:`https://image.tmdb.org/t/p/w45/${obj.poster_path}`
            }}
          >
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
              alt={`tmdb poster of ${title}`}
              // style={{ width: "100%", height: "100%", objectFit: "cover" }}
              sx={{ heught: "100%", width: "100%", objectFit: "cover" }}
            />
          </Box>
        </Link>
        <CardContent>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CircularProgressbarComponent
              number={vote_average}
            ></CircularProgressbarComponent>
            <ClipBtn
              obj={undefined}
              id={obj.id}
              variant="contained"
              color="secondary"
            ></ClipBtn>
          </Stack>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            align="center"
          >
            {title}
          </Typography>
          <Typography gutterBottom variant="body2">
            {formatDateToWords(obj.release_date || obj.first_air_date)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
