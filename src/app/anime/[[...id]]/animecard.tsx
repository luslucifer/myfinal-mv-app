import Image from "next/image";
import { Result } from "./interface";
import {  Card, CardActionArea,Box, Typography } from "@mui/material";
import Link from "next/link";

interface AnimeCardProps {
  obj: Result;
}

const AnimeCard = ({ obj }: AnimeCardProps) => {
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
        <Link href={`/watch/${obj.id}`} style={cardContainerStyle}>
    <Card sx={cardContainerStyle}>
    <CardActionArea sx={cardContainerStyle}>

      <Box sx={{height:{xs:'15rem'} ,width:{xs:'10rem'}}}>
        <Image
          alt={`Poster of ${obj.title}`}
          src={obj.image}
          layout="fill" // Ensure image fills available space
          objectFit="cover" // Crop image while maintaining aspect ratio
          //   style={cardImageStyle} // Apply custom styles
          />
      </Box>
      <Typography variant="body2" align="center" sx={{ padding: "1rem" }}>
        {obj.title}
      </Typography>
      <Typography
      variant="body1" sx={{}}
      >

        {obj.releaseDate}
      </Typography>
          </CardActionArea>
    </Card>
          </Link>
  );
};

export default AnimeCard;
