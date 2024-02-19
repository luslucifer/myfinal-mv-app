import PosterCard from "./posterCard";
import { MovieResponse } from "../page";
import { Stack } from "@mui/material";

interface TmdbScroller {
    obj : MovieResponse
    isTv : boolean
}

export default function TmdbScroller(props:TmdbScroller){

    
    
    return <>
<Stack flexDirection={'row'} gap={2} overflow={'scroll'}>
    

{props.obj.results.map((obj,index)=>{
    let mediaType= props.isTv ||obj.media_type=='tv'? true : false 

    
  return(
    <PosterCard obj={obj} key={index} isTv={mediaType} ></PosterCard>
    
  )
})}
</Stack>
    </>
}