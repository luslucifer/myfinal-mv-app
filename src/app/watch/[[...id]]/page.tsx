import { Container,Box, Card, Grid, CardMedia, Typography,Stack, Rating } from "@mui/material";
import { domain } from "@/app/anime/[[...id]]/page";
import { Qry, qry } from "./interface";
import PlayBox from "./playBox";
import HoverRating from "./rating";
import AnimeCard from "./recommandCard";
import CharecterBox from "./chareterBox";

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
    
    {animeDetails.errors == undefined ?
    
    <Box className='anilistBox'>
    <Box className="overview box ">
        <Card>
            <Grid container>
                <Grid item sm={3} xs={11} sx={{justifyContent:'center',display:'flex'}}>
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


        <Stack flexDirection={'row'} gap={2} overflow={'scroll'}>
            {
                animeDetails.data.Media.characters.edges.map((obj,index)=>{
                    
                    
                    
                    return <CharecterBox obj={obj.node} key={index} ></CharecterBox>
                })
            }
        </Stack>

<Box className='related'>
    <Typography component={'h5'} > Related</Typography>
    <Stack  gap={2} flexDirection={'row'} overflow={'scroll'}>
    {animeDetails.data.Media.relations.nodes.map((obj , index)=>{
        
        return (
            <AnimeCard image={obj.coverImage.extraLarge} key={index} name={obj.title.userPreferred} title={obj.title.english} releaseDate={obj.startDate.year} id={obj.id}></AnimeCard>
            )
        })}


{animeDetails.data.Media.recommendations.nodes.map((obj,key)=>{
    return <AnimeCard key={key}  id={obj.id} image={obj.mediaRecommendation.coverImage.extraLarge} title={obj.mediaRecommendation.title.userPreferred} name={obj.mediaRecommendation.title.english} releaseDate={obj.mediaRecommendation.startDate.year}></AnimeCard>
    // return <div key={key}>
    //     {JSON.stringify(obj)}
    // </div>
})}

        </Stack>

</Box>

    </Box>
</Box>
    :null}

    </Container>;
}
