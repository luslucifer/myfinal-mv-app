// 'use client'
import { options } from "@/app/data-storage/fuctions-data";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
  Button,
  CardContent,
  Paper,
  CardActionArea,
} from "@mui/material";
import Poster from "@/app/components/poster";
import {
  Cast,
  CreditM,
  TvDetailsM,
  RootRecomandationM,
  RootImagesM,
  RootVideosM,
  RootSimilarM,
  RootReviewM,
  SeasonM
} from "./interface";
import CastBox from "@/app/components/castBox";
import PosterCard from "@/app/components/posterCard";
import BackDrop from "@/app/components/backdrop";
import Credits from "@/app/components/credits";
import Player from "@/app/components/reactPlayer";
import CircularProgressbarComponent from "@/app/components/circularProgressBar";
import Link from "next/link";
import Review from "@/app/components/rivewBox";
import ClipBtn from "@/app/components/playClipBtn";
import SeasonTable from "@/app/components/tvtable";
import IframeCard from "@/app/movie/[id]/iframeCard";

async function getData(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?language=en-US`,
    options
  );
  return res.json();
}

async function getCasts(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`,
    options
  );
  return res.json();
}

async function getRecomandations(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?language=en-US&page=1`,
    options
  );
  return res.json();
}

async function getSimilars(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`,
    options
  );
  return res.json();
}

async function getVideos(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`,
    options
  );
  return res.json();
}

async function getImage(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/images?include_image_language=en`,
    options
  );
  return res.json();
}
async function getReview(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?language=en-US&page=1`,
    options
  );

  return res.json();
}


async function getSeasonDetails(id:number,ss:number){
  const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/season/${ss}?language=en-US`, options)
  return res.json()

}

export default async function Movie({ params }) {
  const querry = params.id[0];
  const splited = querry.split(/-/g);
  const id = splited[splited.length - 1];


  const ss = params.id[1] || 1
  const ep = params.id[2] || 1

  //router querry starts form here 
  // const router = useRouter()
  // const {ss,ep} = router.query

  // const [ss,ep]=[1,1]

  const [data, casts, recommendations, similar, videos, images,reviews,seasonInfo] =
    await Promise.all([
      getData(id),
      getCasts(id),
      getRecomandations(id),
      getSimilars(id),
      getVideos(id),
      getImage(id),
      getReview(id),
      getSeasonDetails(id,ss)
    ]);

  const tvData: TvDetailsM = data;
  const credits: CreditM = casts;
  const recommend: RootRecomandationM = recommendations;
  const imageL: RootImagesM = images;
  const videoL: RootVideosM = videos;
  const similarL: RootSimilarM = similar;
  const reviewL:RootReviewM = reviews;
  const seasonL:SeasonM = seasonInfo
const vote_average = Math.round(tvData.vote_average*10)


    
  return (
    <Container>
<IframeCard id={tvData.id} ss={ss} ep={ep} isTv={true} title={tvData.name}></IframeCard>
      <Typography variant="h6" component={"h4"} align="center">
        {tvData.name}
        {`(${tvData.first_air_date.slice(0, 4)})`}{" "}
      </Typography>
      <Grid container sx={{ position: "relative" }}>
        <Grid
          item
          xs={4}
          lg={3}
          sx={{ height: "100%", zIndex: "1" }}
          alignContent={"center"}
        >
          <Card sx={{ height: "100%", alignContent: "center" }}>
            <Poster poster_path={tvData.poster_path}></Poster>
          </Card>
        </Grid>
        <Grid item lg={8} xs={8}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Box
                className="genres"
                sx={{ display: "flex", flexDirection: "row" }}
              >
                {tvData.genres.map((obj, index) => {
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
                <ClipBtn variant="text" obj={videoL}></ClipBtn>
              </Box>
            </CardContent>
            <CardContent>
              <Typography variant="body2">{tvData.overview} </Typography>
              <Box className="casts">
                {/* {showCasts()} */}
                <CastBox Credit={credits}></CastBox>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <CardMedia
          image={`https://image.tmdb.org/t/p/original${tvData.backdrop_path}`}
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

      <SeasonTable details={tvData} seasonData={seasonInfo} currentEp={ep}>

      </SeasonTable>

      <Card sx={{ marginTop: "1rem" }} className="photo">
        <CardContent>
          <Typography variant="h4"> Photos</Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            justifyContent: "space-between",
          }}
        >
          {imageL.backdrops.map((obj, index: number) => {
            return( 
            <CardActionArea key={index}>
              <BackDrop path={`${obj.file_path}`} ></BackDrop>
              </CardActionArea>
         ) })}
        </CardContent>
      </Card>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "scroll",
          justifyContent: "space-between",
        }}
      >
        {credits.cast.map((obj, index) => {
          return <Credits key={index} obj={obj}></Credits>;
        })}
      </Box>
      <Card sx={{ marginTop: "1rem" }}>
        <CardContent>
          <Typography variant="h5"> Videos</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            justifyContent: "space-between",
          }}
        >
          {videoL.results.slice(0, 8).map((obj, index) => {
            return <Player id={obj.key} key={index}></Player>;
          })}
        </Box>
      </Card>

          <Review obj={reviewL}></Review>
      

      <Card sx={{ marginTop: "1rem" }}>
        <CardContent>
          <Typography variant="h5">You may Like Those :</Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
            justifyContent: "space-between",
          }}
        >
          {similarL.results.length>0?similarL.results.map((obj, index) => {
            const encryptedTitle = obj.name.replace(/ /g , '-')+'-'+obj.id

            return (
              <Box key={index} sx={{ marginRight: "1rem" }}>
                <Link href={`/movie/${encryptedTitle}`}>
                <BackDrop path={obj.backdrop_path}></BackDrop>
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6">{obj.name} </Typography>
                  <Typography variant="h6">{obj.vote_average * 10}%</Typography>
                </Box>
              </Box>
            );
          }):<Typography variant="body2"> We Will shortly update This</Typography>}
        </Box>
      </Card>

    </Container>
  );
}
// hellow
