'use client'
import { Grid,Button } from "@mui/material";
import { AnimeInfo } from "./interface";

interface EpRenderer{
    info: AnimeInfo
    epId:string;
    setEpID: React.Dispatch<React.SetStateAction<string>>;


}

export default function EpRenderer(props:EpRenderer){
    // const [info,epId,setEpID] :[AnimeInfo,string,React.Dispatch<React.SetStateAction<string>>] = props
    const info = props.info
    const epId = props.epId
    const setEpID = props.setEpID
    return(
        <Grid container>
          {info.episodes.map((obj, index) => {
            const epNo = index + 1;
            return (
              <Grid item xs={1} key={index} spacing={0}>
                <Button color={obj.id==epId ? 'error' : 'secondary'} variant="outlined" sx={{width:'100%'}} onClick={()=>{props.setEpID(obj.id)}}>{epNo}  </Button>
              </Grid>
            );
          })}
        </Grid>
    )
} 