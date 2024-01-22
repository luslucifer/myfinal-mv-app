import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Cast } from './interface';

interface Credits {
  obj: Cast;
}

export default function Credits(props: Credits) {
//   const { name, character, profile_path } = props.obj;
const object = props.obj
const name = object.name
const character = object.character
const profile_path = object.profile_path

  // Example profile sizes
  const profileSizes = ["w45", "w185", "h632", "original"];

  // Generate the srcSet and sizes attributes
  const baseUrl = `https://image.tmdb.org/t/p/`;
  const srcSet = profileSizes.map((size) => `${baseUrl}${size}/${profile_path} ${size}`).join(', ');
  const sizes = `(max-width: 600px) 100vw, 50vw`;

  return (
    <Card sx={{ minWidth:'10rem' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://image.tmdb.org/t/p/original/${profile_path}`}
          srcSet={srcSet}
          sizes={sizes}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="secondary.main">
            {character}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
