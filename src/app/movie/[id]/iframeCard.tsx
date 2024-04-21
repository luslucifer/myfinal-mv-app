import { Card } from "@mui/material";

interface IframeBox{
    title: string
    id : number
    isTv:boolean
    ep:number
    ss:number
}

export default function IframeCard(props:IframeBox){

    const title = props.title
    const id = props.id
    const istv = props.isTv
    const ss = props.ss
    const ep = props.ep

var  src
    if(!istv){
        src= `https://vidjoy.net/embed/movie/${id}`

    }
    else{
        src=`https://vidjoy.net/embed/tv/${id}/${ss}/${ep}` 
    }

    return (
        <Card
        sx={{
            aspectRatio:`${16/9}`
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Card>
    )
}