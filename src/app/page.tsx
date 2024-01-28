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

export default async function Home() {
  const popularMovie = PopularMovies()
  const trending  = Trending()

  const trendingMv:MovieResponse = await trending
  const popularMoviesList:MovieResponse = await popularMovie
  




  return (
    <main className="">
      <Typography variant="h5" >
        Watch New Movies & Tv
      </Typography>
      <MediaBox popular={popularMoviesList} trending={trendingMv}></MediaBox>
    </main>
  );
}
