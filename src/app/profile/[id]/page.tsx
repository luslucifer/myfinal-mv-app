import {
  Box,
  Typography,
  Card,
  Container,
  Grid,
  CardMedia,
  IconButton,
  Stack,
} from "@mui/material";
import { options } from "@/app/data-storage/fuctions-data";
import {
  CastCreadits,
  CastDetails,
  CastExternalIds,
  CastImages,
} from "./interface";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWikipediaW,
  FaTwitter,
  FaImdb,
  FaTiktok,
} from "react-icons/fa";

import { formatDateToWords } from "@/app/data-storage/fuctions-data";
import PosterCard from "@/app/components/posterCard";
import CollapsibleTable from "@/app/components/colapceableProfileTable";
interface Profile {
  id: string;
}

async function CastDetails(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?language=en-US`,
    options
  );

  return res.json();
}

async function CastCreadits(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US`,
    options
  );

  return res.json();
}

async function CastExternalIds(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/external_ids`,
    options
  );

  return res.json();
}

async function CastImages(id: number) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/images`,
    options
  );

  return res.json();
}



export default async function Profile({ params }: any) {
  const splited = params.id.split(/-/g);
  const id = splited[splited.length - 1];

  const [details, creadits, castExternalIds, castImages] = await Promise.all([
    CastDetails(id),
    CastCreadits(id),
    CastExternalIds(id),
    CastImages(id),
  ]);

  const Details: CastDetails = details;
  const Creadits: CastCreadits = creadits;
  const CastExternalId: CastExternalIds = castExternalIds;
  const CastImage: CastImages = castImages;

  function capitalizeFirstLetter(inputString: string): string {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
  }

  function showIcones() {
    const keyArr: string[] = Object.keys(CastExternalId);
    const elements = keyArr.map((key: string, index: number) => {
      if (
        key !== "id" &&
        key !== "tvrage_id" &&
        CastExternalId[key] !== null &&
        key !== "freebase_mid" &&
        key !== "freebase_id"
      ) {
        const splited = key.split(/_/g);
        const iconName = splited[0];
        const capitalizedIconName = capitalizeFirstLetter(iconName);

        if (key === "facebook_id") {
          return (
            <IconButton key={index}>
              <FaFacebook />
            </IconButton>
          );
        } else if (key === "instagram_id") {
          return (
            <IconButton key={index}>
              <FaInstagram />
            </IconButton>
          );
        } else if (key === "youtube_id") {
          return (
            <IconButton key={index}>
              <FaYoutube />
            </IconButton>
          );
        } else if (key === "wikidata_id") {
          return (
            <IconButton key={index}>
              <FaWikipediaW />
            </IconButton>
          );
        } else if (key === "twitter_id") {
          return (
            <IconButton key={index}>
              <FaTwitter />
            </IconButton>
          );
        } else if (key === "imdb_id") {
          return (
            <IconButton key={index}>
              <FaImdb />
            </IconButton>
          );
        } else if (key === "tiktok_id") {
          return (
            <IconButton key={index}>
              <FaTiktok />
            </IconButton>
          );
        } else {
          return <div>{key}</div>;
        }
      }
      return null;
    });

    return elements;
  }

  function getGender(input: number) {
    if (input === 0) {
      return " Not Specified";
    } else if (input === 1) {
      return "Female";
    } else if (input === 2) {
      return "Male";
    } else if (input === 3) {
      return "we cant tell you";
    }
  }

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardMedia
              component={"img"}
              src={`https://image.tmdb.org/t/p/original${CastImage.profiles[0].file_path}`}
            />
          </Card>
          <Typography variant="h6" align="center">
            {Details.name}
          </Typography>
          <Stack justifyContent={"space-around"} direction={"row"}>
            {showIcones()}
          </Stack>
          <Box className="personal info box">
            <Typography variant="h5"> Personal Info </Typography>
            <Box className="known for">
              <Typography variant="h6"> Known for</Typography>
              <Typography  variant="body1">{Details.known_for_department}</Typography>
            </Box>
            <Box className="gender">
              <Typography variant="h6"> Gender</Typography>
              <Typography variant="body1">{getGender(Details.gender)}</Typography>
            </Box>
            <Box className="BirthDay">
              <Typography variant="h6"> BirthDate</Typography>
              <Typography variant="body1">{formatDateToWords(Details.birthday)}</Typography>
            </Box>
            <Box className="place of birth">
              <Typography variant="h6"> Place of Biarth</Typography>
              <Typography variant="body1">{Details.place_of_birth}</Typography>
            </Box>
            <Box className="creadits">
              <Typography variant="h6">Known Creadits</Typography>
              <Typography variant="body1">
                {Creadits.cast.length + Creadits.crew.length}
              </Typography>
            </Box>
            <Box className="also known as" sx={{margin:'1rem'}}>
              <Typography variant="h6"> Also Known As</Typography>
              {/* <Typography variant="body1">{Details.also_known_as}</Typography> */}
              {Details.also_known_as.map((item,index)=>{
                return ( <Typography variant="body2" key={index}> {item}</Typography>)
              })}
            </Box>            
          </Box>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box className="biography">
            <Typography variant="h6">Biography</Typography>
            <Typography variant="body1" >
                <Typography>{Details.biography}</Typography>
            </Typography>
          </Box>
            
          <Box>
            <Typography variant="h6">
                known For _
            </Typography>
            <Stack direction={"row"} sx={{overflowX:'scroll'}} spacing={4} >
                {/* {Creadits.cast[0]} */}
                {Creadits.cast.map((obj,index)=>{
                    return <PosterCard obj={obj} key={index} minWidth="12rem"></PosterCard>
                })}
            </Stack>
          </Box>
        <CollapsibleTable cast={Creadits.cast}></CollapsibleTable>
        </Grid>
      </Grid>
    </Container>
  );
}
