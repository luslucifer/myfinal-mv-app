'use client'
import { Button } from "@mui/material";
import { MyContext } from "./contextProvider";
import { useContext ,useEffect} from "react";
import { RootVideosM } from "./interface";
import { RootTrailerResponse } from "../data-storage/interfaces";
interface Button{
    key:string;
    variant:string;
    obj:RootVideosM;
    id:number;
}



export default function ClipBtn(props:Button){
    const obj = props.obj


    const {showTrailer,setShowTrailer,setYtKey,ytKey} = useContext(MyContext)

    function onClick(){
        setShowTrailer(true)
        
        if(obj!=undefined){
            const key = obj.results.find((item)=>{
                if(item.type=='Trailer'){
                    setYtKey(item.key)
                }
            })
        }
        else{
            useEffect(()=>{
                fetch(`https://api.kinocheck.de/movies?tmdb_id=${props.id}&language=de&categories=Trailer`)
                .then((res)=>res.json())
                .then((data)=>{
                    const res:RootTrailerResponse = data
                    const ytKey = res.trailer.youtube_video_id
                    setYtKey(ytKey)
                })
                
            },[])
        }
        console.log(ytKey)
    }

    return(
        <Button variant={props.variant} onClick={()=>{onClick()
        }} > play clip</Button>
    )
}