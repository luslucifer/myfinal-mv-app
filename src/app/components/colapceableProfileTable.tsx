'use client'
import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { filterMoviesByKeys } from '../data-storage/fuctions-data';
import { Grid } from '@mui/material';
import Poster from './poster';


interface MovieArray{
    adult: boolean
  backdrop_path?: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title?: string
  overview: string
  popularity: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average: number
  vote_count: number
  character: string
  credit_id: string
  order?: number
  media_type: string
  origin_country?: string[]
  original_name?: string
  first_air_date?: string
  name?: string
  episode_count?: number

}
// Sample movie data
// const movies = [
//   {
//     title: 'Iron Man',
//     vote_average: 7.641,
//     release_date: '2008-04-30',
//     overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
//     character: 'Tony Stark / Iron Man',
//     credit_id: '52fe4311c3a36847f8037ee9',
//     order: 0,
//     media_type: 'movie',
//   },
//   // Add more movie data objects as needed
// ];

function createMovieData(movie) {
  const {
    title,
    vote_average,
    release_date,
    overview,
    character,
    credit_id,
    order,
    media_type,
    poster_path,
  } = movie;

  return {
    title,
    vote_average,
    release_date,
    overview,
    character,
    credit_id,
    order,
    media_type,
    poster_path,
    history: [
      {
        date: release_date,
        customerId: credit_id,
        amount: vote_average,
      },
    ],
  };
}

function MovieRow(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell>{row.release_date}</TableCell>
        <TableCell align="right">{row.vote_average}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container>
                <Grid item xs={4} sm={1}>
                    <Poster poster_path={row.poster_path}></Poster>
                </Grid>
              <Grid item xs={8} sm={11}>
            <Box sx={{ margin: 1 }} className='overView'>
              <Typography variant="h6" gutterBottom component="div">
                Overview
              </Typography>
              <Typography variant="body1">{row.overview}</Typography>
            </Box>
                </Grid>  
            </Grid>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleMovieTable(props:{cast:string[]}) {
const filteredMoviesArray = [];
const movies = props.cast;

movies.filter((obj) => {
  if (obj.title || obj.release_date) {
    filteredMoviesArray.push(obj);
  }
  return false; // This return statement is required for the filter function
});
    const sortedMovies = filteredMoviesArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible movie table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell> Year</TableCell>
            <TableCell align="right">Vote Average</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedMovies.map((movie) => {
            const Movie:MovieArray=movie
            const splitedYear=Movie.release_date?.split(/-/g)[0] //number
            Movie.release_date=splitedYear

           return( <MovieRow key={Movie.title} row={createMovieData(Movie)} />)
  })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
