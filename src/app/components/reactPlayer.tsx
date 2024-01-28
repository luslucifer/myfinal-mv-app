"use client"
import { Box } from '@mui/material';
import ReactPlayer from 'react-player'
interface player {
id:string;}

export default function Player(props:player){

    return(
        <Box sx={{marginRight:'0.5rem'}}>
            <ReactPlayer
            className='react-player'
            url={`https://www.youtube.com/watch?v=${props.id}`}
            width='20rem'
            height='11.1rem'
          />
        </Box>
    )
}