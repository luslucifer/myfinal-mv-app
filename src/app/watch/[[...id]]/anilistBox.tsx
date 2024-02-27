import { CardMedia,Box,Card,Grid,Typography,Stack } from "@mui/material"
import HoverRating from "./rating"
import AnimeCard from "./recommandCard"
import CharecterBox from "./chareterBox";
import { Qry } from "./interface";
import Image from "next/image";
import NativeBanner from "@/app/ads/nativeBanner";

interface Anilist {
    animeDetails:Qry
}

export default function AnilistBox(props:Anilist){
    const animeDetails = props.animeDetails


    return (
        <Box className='anilistBox'>
        <Box className="overview box ">
            <Card>
                <Grid container>
                    <Grid item sm={3} xs={11} sx={{justifyContent:'center',display:'flex',}}>
                        <Box sx={{position:'relative',aspectRatio:`${115/163}`,minWidth:'18rem'}}>
                            {/* <Image src={animeDetails.data.Media.coverImage.extraLarge} layout="fill" objectFit="contain" fill={true}></Image> */}
                            {/* {animeDetails.data.Media.coverImage.extraLarge} */}
                            {/* <CardMedia component={'img'} sx={{margin:'1rem'}} src={animeDetails.data.Media.coverImage.extraLarge}></CardMedia> */}
                            <Image src={animeDetails.data.Media.coverImage.extraLarge} style={{margin:'1rem'}} layout="fill" objectFit="cover" alt={`poster of ${animeDetails.data.Media.title.english}`}></Image>
                        </Box>
                    </Grid>
                    <Grid item sm={8} xs={12} sx={{display:'flex',justifyContent:'center',alignContent:'start' ,flexWrap:'wrap'}}>
                        <Box sx={{maxWidth:'80%',display:'flex',justifyContent:'end' ,flexDirection:'column' , alignContent:'start',marginTop:'1rem'}}>
    
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
    
    <NativeBanner></NativeBanner>
    
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
     
    })}
    
            </Stack>
    
    </Box>
    
        </Box>
    </Box>
    
    )
}