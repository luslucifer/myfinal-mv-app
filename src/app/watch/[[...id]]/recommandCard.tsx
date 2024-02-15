import Image from "next/image";
import {  Card, CardActionArea,Box, Typography,CardMedia } from "@mui/material";
import Link from "next/link";

interface AnimeCardProps {
    
        name:string;
        title:string;
        releaseDate:number;
    image:string
    id:number
    

}

const AnimeCard = (props: AnimeCardProps) => {
    const name = props.name
    const releaseDate = props.releaseDate
    const title = props.title
    const image = props.image
  const cardContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: "max-content", // Allow card to shrink to content size
    // height:'15rem',
    maxWidth:{xs:'10rem'}
    
  };

  const cardImageStyle = {
    maxWidth: "100%",
    maxHeight: "15rem", // Adjust height as needed
    borderRadius: "10px", // Optional rounded corners
  };

  return (
        <Link href={`/anime/${encodeURIComponent(name)+'-'+props.id}`} style={cardContainerStyle}>
    <Card sx={cardContainerStyle}>
    <CardActionArea sx={cardContainerStyle}>

      <Box sx={ {position:'relative', height:{xs:'auto'} ,width:{xs:'auto'}}}>
        <CardMedia
        component={'img'}
          alt={`Poster of ${title}`}
          src={image}
          sx={{position:'relative'}}
        //   layout="fill" // Ensure image fills available space
        //   objectFit="contain" // Crop image while maintaining aspect ratio
          //   style={cardImageStyle} // Apply custom styles
          />
      </Box>
      <Typography variant="body2" align="center" sx={{ padding: "1rem" }}>
        {title}
      </Typography>
      <Typography
      variant="body1" sx={{}}
      >

        {releaseDate}
      </Typography>
          </CardActionArea>
    </Card>
          </Link>
  );
};

export default AnimeCard;
