import { Container } from "@mui/material"
import AnimeBoxCompo from "./animeShowcaseBox"
export default function Anime({params}){

    const propsArr = params.id
    const splited = decodeURIComponent(propsArr[0]).split(/-/g) 
    const removed = splited.pop()
    const qry = splited.join(' ')

     

    return(
        <Container>
            <AnimeBoxCompo qry={qry}></AnimeBoxCompo>
        </Container>
    )
}