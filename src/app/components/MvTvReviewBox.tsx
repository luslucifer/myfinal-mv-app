import { Grid,Card,CardContent,Box,Typography,Button,CardMedia } from "@mui/material";
import { CreditM, MovieDetailsM, RootVideosM } from "./interface";
import CircularProgressbarComponent from "./circularProgressBar";
import Poster from "./poster";
import CastBox from "./castBox";
import ClipBtn from "./playClipBtn";

interface DescriptionBox{
    movieData : MovieDetailsM
    isTv : boolean
    videoL: RootVideosM
    credits:CreditM
    voteAverage:number
}

export default function DescriptionBox(props:DescriptionBox){
    const movieData = props.movieData
    const videoL = props.videoL
    const vote_average = props.voteAverage
    const credits = props.credits



    return <>
    <Grid container sx={{ position: "relative" }}>
        <Grid
          item
          xs={4}
          lg={3}
          sx={{ height: "100%", zIndex: "1" }}
          alignContent={"center"}
        >
          <Card sx={{ height: "100%", alignContent: "center" }}>
            <Poster obj={movieData}></Poster>
          </Card>
        </Grid>
        <Grid item lg={8} xs={8}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                className="genres"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                {movieData.genres.map((obj, index) => {
                  return (
                    <Button variant="outlined" key={index}>
                      <Typography variant="body1" >
                        {obj.name}
                        </Typography>
                    </Button>
                  );
                })}
              </Box>
              <Box // this box is dedicated for circular proggress bar component and trailer button 
              sx={{display:'flex',flexDirection:'row',justifyContent:'space-between',position:'relative',zIndex:'2'}}
              >
                <CircularProgressbarComponent number={vote_average} />
                {/* <Button variant="contained"><Typography variant="body2">Play Clip</Typography></Button> */}
                <ClipBtn   variant="contained" obj={videoL}></ClipBtn>
              </Box>
            </CardContent>
            <CardContent>
              <Typography variant="body2">{movieData.overview} </Typography>
              <Box className="casts">
                {/* {showCasts()} */}
                <CastBox Credit={credits}></CastBox>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <CardMedia
          image={`https://image.tmdb.org/t/p/original${movieData.backdrop_path}`}
          component={"img"}
          className="backgroundImg"
          sx={{
            position: "absolute",
            pointerEvents: "none",
            height: "100%",
            opacity: "39%",
            filter: "grayscale(42%)",
          }}
        ></CardMedia>
      </Grid>
    </>
}