import { Container,Box, Card, Grid, CardMedia, Typography,Stack, Rating } from "@mui/material";
import AnimePlayer from "./animePlayer";
import { domain } from "@/app/anime/[[...id]]/page";
import { Qry, qry } from "./interface";
import PlayBox from "./playBox";
import Image from "next/image";
import HoverRating from "./rating";
import AnimeCard from "./recommandCard";

export var AnilistUrl = "https://graphql.anilist.co";

async function getAnilist(searchQry: string) {
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

async function getInfo(id: string) {
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

  const dubId = splited.join("-") + "-dub";
  const subId = splited.join("-");
  // const infoAnilist:Qry = await getAnilist(serQry)

  const [subInfo, dubInfo, anilistDetail] = await Promise.all([
    getInfo(subId),
    getInfo(dubId),
    getAnilist(serQry),
  ]);
    const animeDetails:Qry = anilistDetail
  return <Container>
    <PlayBox subInfo={subInfo} dubInfo={dubInfo}></PlayBox>
    
    <Box className="overview box ">
        <Card>
            <Grid container>
                <Grid item sm={4} xs={11} sx={{justifyContent:'center',display:'flex'}}>
                    <Box sx={{position:'relative'}}>
                        {/* <Image src={animeDetails.data.Media.coverImage.extraLarge} layout="fill" objectFit="contain" fill={true}></Image> */}
                        {/* {animeDetails.data.Media.coverImage.extraLarge} */}
                        <CardMedia component={'img'} sx={{margin:'1rem'}} src={animeDetails.data.Media.coverImage.extraLarge}></CardMedia>
                    </Box>
                </Grid>
                <Grid item sm={8} xs={12} sx={{display:'flex',justifyContent:'center'}}>
                    <Box sx={{maxWidth:'80%',display:'flex',justifyContent:'end' ,flexDirection:'column'}}>

                    <Stack  flexDirection={'row'} justifyContent={'space-between'} className='title an rating' >
                        <Typography component={'h2'}>{animeDetails.data.Media.title.english}</Typography>
                        <HoverRating value={animeDetails.data.Media.averageScore/20}></HoverRating>
                    </Stack>

                    <Box className='overview'>
                        <Typography component={'body1'}  dangerouslySetInnerHTML={{__html:animeDetails.data.Media.description}}>
                        </Typography>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
        </Card>

<Box className='related'>
    <Grid container>
    {animeDetails.data.Media.relations.nodes.map((obj , index)=>{
        
        return (
            <AnimeCard image={obj.coverImage.extraLarge} key={index} name={obj.title.userPreferred} title={obj.title.english} releaseDate={obj.startDate.day} id={obj.id}></AnimeCard>
            )
        })}
        </Grid>

</Box>

    </Box>
    </Container>;
}
