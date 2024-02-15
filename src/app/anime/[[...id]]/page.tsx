import { Container, Grid, Stack } from "@mui/material";
import { SearchAnime,Qry, SearchedQry } from "./interface";
import AnimeCard from "./animecard";
import { AnilistUrl } from "@/app/watch/[[...id]]/page";
export const domain = "https://consumet-api-hp98.onrender.com/";

async function searchingAnime(qry: string) {
  const res = await fetch(domain + "anime/gogoanime/" + qry);
  return res.json();
}

async function getNames(qry:string){
  var variables = {
    search: qry,
    
};

const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
  },
  body: JSON.stringify({
      query: Qry,
      variables: variables
  })
};

const res = await fetch(AnilistUrl,options)

return res.json()
}

export default async function ({ params }) {
  const qry = decodeURI(params.id[0]);
  const searchArr = qry.split(/-/g);
  searchArr.pop();
  const searchQry = decodeURIComponent(searchArr.join(" "));

  const getTitles:SearchedQry = await getNames(searchQry)
  const searchedRes: SearchAnime = await searchingAnime(encodeURIComponent(getTitles.data.Media.title.userPreferred));

  return (
    <Container>
      {JSON.stringify(getTitles)}
      <p>{searchQry}</p>
      <Grid container sx={{display:'flex',justifyContent:'center'}} gap={'15px'}>
        {searchedRes.results.length != 0
          ? searchedRes.results.map((obj, index) => {
            
              return (
               <Grid item key={index} >
              <AnimeCard obj={obj} key={index}></AnimeCard>
               </Grid>
              );
            })
          : null}
      </Grid>
    </Container>
  );
}
