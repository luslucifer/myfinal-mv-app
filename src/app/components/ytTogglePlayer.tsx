"use client";

import {  Box, Button,Stack } from "@mui/material";
import ReactPlayer from "react-player";
import { useContext,useEffect, useState } from "react";
import { MyContext } from "./contextProvider";
import CloseIcon from "@mui/icons-material/Close";

export default function YtTogglePlayer() {
  const { showTrailer, ytKey,setShowTrailer} = useContext(MyContext);
  const [showBox,setShowBox]=useState('none')

//   function BlockorNone(showTrailer:boolean){
//     if(showTrailer){
//         return 'block'
//     }
//     else{
//         return 'none'
//     }
//   }
  useEffect(()=>{
    if(showTrailer){
        console.log('worked')
        setShowBox('block')
    }
    else{
        console.log('worked too')
        setShowBox('none')
    }

  },[showTrailer])
  


  return (
    <Stack flexDirection={'row'} justifyContent={'center'} sx={{}}>
    <Box sx={{position:'fixed',zIndex:'500',display:showBox,top:'40%'}}>
        <Box>
        <Button onClick={()=>{setShowTrailer(false)
        console.log(showTrailer)
    }} sx={{Width:'3rem'}}>
          <CloseIcon></CloseIcon>{" "}
        </Button>
      </Box>
      <Box className="player-wrapper" sx={{maxWidth:{ xs:'20rem',sm:'40rem'},maxHeight:{xs:'25.1rem',sm:'50rem'}}}>
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${ytKey}`}
          width="100%"
          height="100%"
          playing={showTrailer}
          controls={true}
          />
      </Box>
    </ Box>
          </Stack>
  );
}
