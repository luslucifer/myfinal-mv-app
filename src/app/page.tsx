import { options } from "./data-storage/fuctions-data";
import { Movie } from "./data-storage/fuctions-data";
import { Typography } from "@mui/material";
import MediaBox from "./components/mediaBox";

interface MovieResponse {
  page: number;
  results: Movie[];
}

async function PopularMovies(){
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
  return res.json()
}
async function Trending(){
  const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  return res.json()
}

async function PopularTV(){
  const res = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', options)
  return res.json()
}

export default async function Home() {
  const popularMovie = PopularMovies()
  const trending  = Trending()
  const popularTv = PopularTV()

  const trendingMv:MovieResponse = await trending
  const popularMoviesList:MovieResponse = await popularMovie
  const popularTVs : MovieResponse = await popularTv




  return (
    <main className="">
      {/* <Typography variant="h5" >
        Watch New Movies & Tv
      </Typography> */}
      <MediaBox popular={popularMoviesList} trending={trendingMv} popularTv={popularTVs}></MediaBox>
    </main>
  );
}
