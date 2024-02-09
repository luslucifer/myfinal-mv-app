import React from "react";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Media } from "./interface";
import Image from 'next/image'
import Link from "next/link";

interface AnimeCardProps {
  anime: Media;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (

    <Card sx={{maxWidth:'17rem',display:'flex',justifyContent:'center' ,flexDirection:'column',alignContent:'center'}}>
    <Stack
    justifyContent={'center'}
    alignContent={'center'}
    >
        {/* <CardContent> */}


      {anime.coverImage && (
        <Link href={`/watch/${((anime.title.romaji || anime.title.english)?.replace(/[ /]/g, '-'))}/${anime.id}`}>
          <Image
          src={anime.coverImage.extraLarge}
          alt={anime.title.romaji || anime.title.english || 'Anime Cover'}
          width={150}
          height={300}
          />
          </Link>
          )}
    {/* </CardContent> */}
    </Stack>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {anime.title.english || anime.title.romaji || "Untitled"}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`Anime ID: ${anime.id}`}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`Format: ${anime.format || "Unknown"}`}
        </Typography>
        {anime.startDate && (
          <Typography variant="body2" color="textSecondary">
            {`Start Date: ${anime.startDate.year}-${anime.startDate.month}-${anime.startDate.day}`}
          </Typography>
        )}
        {anime.endDate && (
          <Typography variant="body2" color="textSecondary">
            {`End Date: ${anime.endDate.year}-${anime.endDate.month}-${anime.endDate.day}`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default AnimeCard;
