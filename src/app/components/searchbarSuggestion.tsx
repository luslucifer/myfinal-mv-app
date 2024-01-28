'use client'
import { CardMedia, Container, Grid, Typography } from "@mui/material"
import { options } from "../data-storage/fuctions-data"
import { useEffect, useState } from "react"

import { Searched,Result } from "../data-storage/interfaces"
import Poster from "./poster"
export default function Suggestion(props:{querry:string}){
const querry = props.querry
const [arr,setArr]=useState([])
const Arr:Result = arr 

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/search/multi?query=${querry}&include_adult=false&language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => setArr(response.results))
  .catch(err => console.error(err));
},[querry])

    return(
        <Container sx={{position:'absolute',zIndex:'900000000000000000000000000',bottom:'0'}}>
            {Arr.length>0 ? 
            Arr.slice(0,5).map((obj,index)=>{
                return (
                    <Grid container key={index}>
                        <Grid item className="poster" xs={1}>
                            <Poster poster_path={obj.poster_path}></Poster>
                        </Grid>
                        <Grid item className="main" xs={8}>
                            
                         </Grid>
                    </Grid>
                )            })
            : null}
        </Container>
    )
}