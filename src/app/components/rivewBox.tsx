'use client'
import { Avatar, Card, CardActionArea, CardContent, Grid, Stack, Typography,Box,Rating, Container } from "@mui/material";
import { RootReviewM } from "./interface";
import { parseTimestamp } from "../data-storage/fuctions-data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import Link from "next/link";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import { useEffect ,useState} from "react";




interface Review{
  obj:RootReviewM
}


function responsiveText(input:string,width:number){
  if (width<=600){
    return input.split(/ /g).slice(0,100).join(' ')
  }
  return input

}

export default function Review(props:Review){
  const obj  = props.obj
  const [width,setwidth]=useState<number|undefined>( undefined)

  useEffect(()=>{
    setwidth(window.innerWidth)

  },[])

  return(

      <Box>
<Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      // effect="fade"
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >


      {obj.results.map((obj,index)=>{

        return(
          <SwiperSlide key={index}>
            <Link href={obj.url}>

          <Card sx = {{marginTop:'1rem'}} >
      <CardActionArea>
        <CardContent>
            <Stack flexDirection={'row'} >
          <Avatar src={`https://image.tmdb.org/t/p/w45/${obj.author_details.avatar_path}`} ></Avatar>
              <Box sx={{marginLeft:'1rem'}}>
                <Typography variant='body2'>Featured Review </Typography>
              <Typography variant="subtitle1" sx={{}} color={'primary.main'}>A Review by {obj.author_details.username}</Typography>
                <Rating name="read-only" value={obj.author_details.rating/2} precision={0.1} readOnly></Rating>
                <Typography variant="body2"> Written on {parseTimestamp(obj.created_at)}</Typography>
                </Box>  
            </Stack>
                <Typography variant='body2' > 
                {responsiveText(obj.content,width)}
                </Typography>
        </CardContent>
            
      </CardActionArea>
    </Card>
            </Link>
          </SwiperSlide>
      )
    })}
        </Swiper>
    </Box>
  )
}