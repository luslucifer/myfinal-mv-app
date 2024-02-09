import { QryResult, query, AnimeData, AnimeInfo } from "./interface";
import findClosestString from "@/app/data-storage/functions/find";
import { Container, Box, Stack, Grid, Typography } from "@mui/material";
import AnimePlayer from "./animePlayer";
import Image from "next/image";
import PlayBox from "./playbox";
const domain = "http://localhost:8000/anime/gogoanime/";
async function SearchAnime(qry: string) {
  const res = await fetch(`${domain + qry}`);
  return res.json();
}
async function getAnimeInfo(id: string) {
  const res = await fetch(domain + "info/" + id, { cache: "no-cache" });
  return res.json();
}

async function getWatchList(id: string) {
  const res = await fetch(domain + "watch/" + id);
  return res.json();
}

async function getAnimeData(id: number) {
  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: { id: id },
      }),
      next: { revalidate: 604800 },
      // cache: 'no-store' ,
    };

  const res = await fetch(url, options);
  return res.json();
}

export default async function WatchAnime({ params }) {
  const qry = decodeURIComponent(params.id[0]);
  // const qry ='Hagane-no-Renkinjutsushi:-FULLMETAL-ALCHEMIST'
  const id: number = params.id[1];
  const qryResult: QryResult = await SearchAnime(qry);
  const mutedQry = qry.toLowerCase();
  var idSub: string;
  var idDub: string;
  var dubInfo: AnimeInfo;

  const idsArr: string[] = [];
  if (qryResult.results.length >= 1) {
    //maybe dub is available
    let arr = qryResult.results;
    arr.map((obj) => {
      idsArr.push(obj.id);
    });
    idSub = findClosestString(mutedQry, idsArr) || qryResult.results[0].id;

    const Dub = idsArr.find((id) => id == idSub + "-dub");

    if (Dub) {
      idDub = idSub + "-dub";
      dubInfo = await getAnimeInfo(idDub); // if dub is available then it will fetch dubed info
    } else {
      //maybe we can find dub
      dubInfo = await getAnimeInfo(idSub + "-dub");
      if (Object.keys(dubInfo).length == 1) {
        dubInfo = undefined; // dub is not available
      }
    }
  }
  const subInfo: AnimeInfo = await getAnimeInfo(idSub); // it will fetch subbed info
  const animeData: AnimeData = await getAnimeData(id);

  return (
    <Container>
      {qry}
      <Box>
        <PlayBox dubObj={dubInfo} domain={domain} subObj={subInfo}></PlayBox>
      </Box>

      <Box
        className="reviewBox"
        sx={
          {
            // width: "100%",
            // backgroundImage: `url(${animeData.data.anime.bannerImage})`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center",
            // backgroundSize: "cover",
          }
        }
      >
        <Box sx={{ position: "relative" }}>
          <Image
            src={animeData.data.anime.bannerImage}
            layout="fill"
            objectFit="contain"
            alt={"image of " + animeData.data.anime.title.english}
          ></Image>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={4} sx={{ position: "relative" }}>
            <Stack
              sx={{ height: { xs: "10rem" },  
          width: "100%",
          // backgroundImage: `url(${animeData.data.anime.bannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
            }}
              justifyContent={"right"}
            >
              <Image
                src={animeData.data.anime.coverImage.extraLarge}
                layout="fill"
                objectFit="contain"
                alt={`anilist poster image of ${animeData.data.anime.title.english}`}
                ></Image>
              {/* <Image
          src={animeData.data.anime.bannerImage}
          layout="fill"
          objectFit="contain"
          alt={'image of '+animeData.data.anime.title.english}
          style={{zIndex:'-1'}}
          ></Image> */}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h5">
              {animeData.data.anime.title.english}
            </Typography>
            <Typography variant="h6"  dangerouslySetInnerHTML={{ __html:animeData.data.anime.description}}>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
