"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Stack, Autocomplete, TextField, Grid, CardMedia } from "@mui/material";
import Link from "next/link";
import { options } from "../data-storage/fuctions-data";
import { SearchedResult, Genre } from "../data-storage/interfaces";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar() {
  const [querry, setQuerry] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [arr, setArr] = React.useState<SearchedResult[]>([]);
  // const [genre,setGenre] = React.useState([])
  const [genreTv, setGenreTv] = React.useState<Genre[]>([]);

  // const [value,setValue]=React.useState('')
  React.useEffect(() => {
    // fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    // .then(response => response.json())
    // .then(response => setGenre(response.genres))
    // .catch(err => console.error(err));
    fetch("https://api.themoviedb.org/3/genre/tv/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenreTv(response.genres))
      .catch((err) => console.error(err));
  }, []);

  React.useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${querry}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setArr(response.results);
        setOpen(true);
        console.log(querry);
      })
      .catch((err) => console.error(err));
  }, [querry]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MovieKex
          </Typography>
          <Autocomplete
            options={arr}
            open={open}
            onClose={() => {
              setOpen(false);
            }}
            getOptionKey={(option) => option.id}
            getOptionLabel={(option) => option.title || option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="search"
                sx={{ minWidth: "40ch" }}
                variant="standard"
              ></TextField>
            )}
            onInputChange={(e, value) => {
              setQuerry(value);
              setOpen(false);
            }}
            renderOption={(props, option) => {
              const title2 =
                option.title?.replace(/[ /]/g, "-") + "-" + option.id ||
                option.name?.replace(/[ /]/g, "-") + "-" + option.id;
              return (
                <Link href={`/movie/${title2}`}>
                  <Grid container>
                    <Grid item xs={1}>
                      {/* <Poster poster_path={option.poster_path}></Poster> */}
                      <CardMedia
                        component={"img"}
                        src={`https://image.tmdb.org/t/p/w45/${option.poster_path}`}
                      ></CardMedia>
                    </Grid>
                    <Grid item xs={11}>
                      <Box>
                        <Typography component={"h6"}>
                          {" "}
                          {option.title || option.name}
                        </Typography>
                      </Box>
                      <Stack direction={'row'} justifyContent={'space-evenly'}>
                        {option.genre_ids !== undefined
                          ? option.genre_ids.map((id) => {
                              const matchingGenre = genreTv.find(
                                (item) => item.id === id
                              );
                              return matchingGenre ? (
                                <Box key={matchingGenre.id} sx={{color:'secondary.main'}}>
                                <Typography variant="body2"  className="">
                                  {matchingGenre.name}
                                </Typography>
                                </Box>
                              ) : null;
                            })
                          : null}
                      </Stack>
                    </Grid>
                  </Grid>
                </Link>
              );
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
