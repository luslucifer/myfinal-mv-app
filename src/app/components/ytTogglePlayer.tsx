"use client";

import { Container, Box, Button,Stack } from "@mui/material";
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
    <div style={{}}>
    <Container sx={{position:'fixed',zIndex:'500',display:showBox ,maxWidth:'20rem',maxHeight:'11.25rem'}}>
      <Stack justifyContent={'flex-end'} flexDirection={'row'}>
        <Button onClick={()=>{setShowTrailer(false)
        console.log(showTrailer)
        }} sx={{maxWidth:'3rem'}}>
          <CloseIcon></CloseIcon>{" "}
        </Button>
      </Stack>
      <Box className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url={`https://www.youtube.com/watch?v=${ytKey}`}
          width="100%"
          height="100%"
          />
      </Box>
    </Container>
    </div>
  );
}
