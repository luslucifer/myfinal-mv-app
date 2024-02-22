import { options } from "./data-storage/fuctions-data";
import { Movie } from "./data-storage/fuctions-data";
import { Stack, Typography } from "@mui/material";
import { Container,Box } from "@mui/material";
import Image from "next/image";
import TmdbScroller from "./components/tmdbScroller";
import { PopularTv } from "./interface/popularTv";
import { TrendingAll } from "./interface/trendingAll";
import { domain } from "./anime/[[...id]]/page";
import { TopAiringAnime } from "./interface/topAiring";
import AnimeCard from "./anime/[[...id]]/animecard";
import Description from "./description";
import { Metadata } from "next";



export interface MovieResponse {
  page: number;
  results: Movie[];
}

async function PopularMovies(){
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
  return res.json()
}
async function Trending(){
  const res = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  return res.json()
}

async function PopularTV(){
  const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
  return res.json()
}

async function topAiringAnime() {
  const res = await fetch(domain+'anime/gogoanime/top-airing')
  return res.json()
  
}

export default async function Home() {
 const [popularMv,trendingMv,popularTv,topAnime]:[MovieResponse,TrendingAll,PopularTv,TopAiringAnime] = await Promise.all([PopularMovies(),Trending(),PopularTV(),topAiringAnime()])





  return (
    <main className="">
      <Container>
        {/* <Box className='landingPage' sx={{aspectRatio:`${2.7}`,width:'100%',position:'relative',display:'flex' ,justifyContent:'center' , alignCpntent:'center'}}>

        <Image objectFit="cover" src={'/images/landing.jpg'} layout="fill" alt="my landing image " style={{zIndex:'0'}}></Image>
        <Box position={'absolute'} top={'25%'}>
        <Typography textAlign={'center'} variant="h3"  color={''} > Welcome to MovieKex </Typography>
        <Typography textAlign={'center'} component="h1">Thousands of Movies And TV Shows are  Ready to Stream</Typography>

        </Box>
        </Box> */}

<Typography textAlign={'center'}>
<Description></Description>
</Typography>
        <Box className='popular movies'>

          <Typography variant="h4"> Popular</Typography>
          <TmdbScroller obj={popularMv} isTv={false}></TmdbScroller>
        </Box>

<Box className="trending">
<Typography variant="h4"> Trending</Typography>


<TmdbScroller obj={trendingMv}></TmdbScroller>
</Box>


<Box className="popularTvs">
<Typography variant="h4"> Popular Tv</Typography>
<TmdbScroller obj={popularTv} isTv={true}></TmdbScroller>
</Box>

<Box className="topAnime">
  <Typography variant="h4"> Top Anime</Typography>
<Stack className='popularAnimes' flexDirection={'row'} gap={2} overflow='scroll' >
    {topAnime.results.map((obj,index)=>{
      return <AnimeCard obj={obj} key={index}></AnimeCard>
    })}
</Stack>
    </Box>


</Container>

    </main>
  );
}
