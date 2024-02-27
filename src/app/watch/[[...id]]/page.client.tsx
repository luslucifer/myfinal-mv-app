import { Container,Box, Card, Grid, CardMedia, Typography,Stack, Rating } from "@mui/material";
import { domain } from "@/app/anime/[[...id]]/page";
import { Qry, qry } from "./interface";
import PlayBox from "./playBox";
import AnilistBox from "./anilistBox";
import NativeBanner from "@/app/ads/nativeBanner";


export var AnilistUrl = "https://graphql.anilist.co";




export async function getAnilist(searchQry: string) {
  const variables = {
    search: searchQry,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: qry,
      variables: variables,
    }),
  };
  const res = await fetch(AnilistUrl, options);
  return res.json();
}

export async function getInfo(id: string) {
  const res = await fetch(domain + `anime/gogoanime/info/${id}`);
  return res.json();
}



 
export default async function Watch({ params }) {
  const id: string = params.id[0];
  const splited = id.split(/-/g);
  if (splited[splited.length - 1] == "dub") {
    splited.pop();
  }
  const serQry: string = splited.join(" ");
  const [info, anilistDetail] = await Promise.all([
    getInfo(id),
    getAnilist(serQry),
  ]);
    const animeDetails:Qry = anilistDetail
  return <Container>
    <PlayBox info={info}></PlayBox>
    
    {animeDetails.errors == undefined ?
    
    <AnilistBox animeDetails={animeDetails}></AnilistBox>
    :null}

    </Container>;
}
