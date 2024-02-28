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
  MovieDetailsM,
  RootRecomandationM,
  RootImagesM,
  RootVideosM,
  RootSimilarM,
  RootReviewM,
} from "@/app/components/interface";
import CastBox from "@/app/components/castBox";
import PosterCard from "@/app/components/posterCard";
import BackDrop from "@/app/components/backdrop";
import Credits from "@/app/components/credits";
import Player from "@/app/components/reactPlayer";
import CircularProgressbarComponent from "@/app/components/circularProgressBar";
import Link from "next/link";
import Review from "@/app/components/rivewBox";
import ClipBtn from "@/app/components/playClipBtn";
import IframeCard from "./iframeCard";
import { KeyWordObj } from "./keyWordsInterface";
import { AlignedKrywords } from "./keywords";
import { Metadata,ResolvingMetadata } from "next";
import DescriptionBox from "@/app/components/MvTvReviewBox";
import NativeBanner from "@/app/ads/nativeBanner";
import ComboBanners from "@/app/ads/comboBanners";
async function getData(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  return res.json();
}

async function getCasts(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return res.json();
}

async function getRecomandations(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
    options
  );
  return res.json();
}

async function getSimilars(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
    options
  );
  return res.json();
}

async function getVideos(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
    options
  );
  return res.json();
}

async function getImage(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en`,
    options
  );
  return res.json();
}
async function getReview(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );

  return res.json();
}
export async function getKeyWords(id:number,type:string){
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/keywords`, options)
    return res.json()
  }


interface Props{
  id:string
}

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const querry = params.id;
  const splited = querry.split(/-/g);
  const id = splited[splited.length - 1];
  

  const [data, casts, recommendations, similar, videos, images,reviews,keywords] =
    await Promise.all([
      getData(id),
      getCasts(id),
      getRecomandations(id),
      getSimilars(id),
      getVideos(id),
      getImage(id),
      getReview(id),
      getKeyWords(id,'movie')
    ]);

  const movieData: MovieDetailsM = data;
  const credits: CreditM = casts;
  const recommend: RootRecomandationM = recommendations;
  const imageL: RootImagesM = images;
  const videoL: RootVideosM = videos;
  const similarL: RootSimilarM = similar;
  const reviewL:RootReviewM = reviews;
  const Keywords:KeyWordObj = keywords

 
 
  return {
    title:`Watch ${movieData.title} Full Movie Watch Online for Free`,
    description:movieData.overview,
    keywords:AlignedKrywords(keywords),
    openGraph:{
      title:`Watch ${movieData.title} Full Movie Watch Online for Free`,
      description:movieData.overview,
      images:`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`
    }

    
  }
}


export default async function Movie({ params }:Props) {
  const querry = params.id;
  const splited = querry.split(/-/g);
  const id = splited[splited.length - 1];

  const [data, casts, recommendations, similar, videos, images,reviews,keywords] =
    await Promise.all([
      getData(id),
      getCasts(id),
      getRecomandations(id),
      getSimilars(id),
      getVideos(id),
      getImage(id),
      getReview(id),
      getKeyWords(id,'movie')
    ]);

  const movieData: MovieDetailsM = data;
  const credits: CreditM = casts;
  const recommend: RootRecomandationM = recommendations;
  const imageL: RootImagesM = images;
  const videoL: RootVideosM = videos;
  const similarL: RootSimilarM = similar;
  const reviewL:RootReviewM = reviews;
  const Keywords:KeyWordObj = keywords

  

const vote_average = Math.round(movieData.vote_average*10)
  return (
    <Container>
      <IframeCard id={id} title={movieData.title} ep={1} ss={1} isTv={false}></IframeCard>
      <Typography variant="h6" component={"h4"} align="center">
        {movieData.title}
        {`(${movieData.release_date.slice(0, 4)})`}{" "}
      </Typography>
    <DescriptionBox credits={credits} movieData={movieData} videoL={videoL} isTv={false} voteAverage={vote_average}></DescriptionBox>
<NativeBanner></NativeBanner>
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
      <Paper sx={{ marginTop: "1rem" }}>
        <Card>
          <CardContent>
            <Typography variant="h4">More Like This</Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "scroll",
              justifyContent: "space-between",
            }}
          >
            {recommend.results.length>0?recommend.results.map((obj, index) => {
              return (
                <Box key={index} sx={{ marginRight: "0.5rem" }}>
                  <PosterCard obj={obj} minWidth="14rem"></PosterCard>
                </Box>
              );
            }):<Typography variant="body2"> We Will shortly update This</Typography>}
          </CardContent>
        </Card>
      </Paper>

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
            const encryptedTitle = obj.title.replace(/ /g , '-')+'-'+obj.id

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
                  <Typography variant="h6">{obj.title} </Typography>
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
