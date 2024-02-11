"use client"
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import AnimeCard from "./animePosterCard";
interface AniListResponse {
  data?: {
    Page?: {
      media?: Media[];
    };
  };
}

interface Media {
  id: number;
  title: {
    romaji?: string;
    english?: string;
  };
  coverImage: {
    extraLarge?: string;
  };
  format?: string;
  startDate?: {
    year: number;
    month: number;
    day: number;
  };
  endDate?: {
    year: number;
    month: number;
    day: number;
  };
}

interface AnimeBox {
  qry: string;
}

const url: string = 'https://graphql.anilist.co';

export default function AnimeBoxCompo(props: AnimeBox) {
  const [seasons, setSeasons] = useState<Media[] | null>(null);
  const qry = props.qry;

  const query: string = `
    query ($page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(search: $search, type: ANIME) {
          id
          title {
            romaji
            english
          }
          coverImage {
            extraLarge
          }
          format
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
        }
      }
    }
  `;

  const variables = {
    search: qry,
  };

  const optionsAnilist = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  };

  function handleResponse(response: Response): Promise<AniListResponse> {
    return response.json().then(function (json: AniListResponse) {
      return response.ok ? json : Promise.reject(json);
    });
  }

  function handleData(data: AniListResponse) {
    const fetchedSeasons = data?.data?.Page?.media;
    if (fetchedSeasons && fetchedSeasons.length > 0) {
      fetchedSeasons.forEach(season => {
        const { id, title, coverImage, format, startDate } = season;
        console.log(`Anime ID: ${id}`);
        console.log(`Title (Romaji): ${title?.romaji}`);
        console.log(`Title (English): ${title?.english}`);
        console.log(`Cover Image: ${coverImage?.extraLarge}`);
        console.log(`Format: ${format}`);

        // Get the season number only for TV seasons
        const seasonNumber = getSeasonNumber(startDate, format);
        if (seasonNumber !== null) {
          console.log(`Season Number (TV): ${seasonNumber}`);
        } else {
          console.log(`Not a TV season`);
        }
      });
      setSeasons(fetchedSeasons);
    } else {
      console.log('No anime seasons found for "Attack on Titan".');
    }
  }

  function handleError(error: Error) {
    console.error('Error:', error.message || error);
  }

  // Function to get the season number based on the startDate for TV seasons
  function getSeasonNumber(startDate: { year: number, month: number, day: number }, format: string): number | null {
    // Check if the format is "TV"
  }
  useEffect(() => {
    fetch(url, optionsAnilist)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);
  }, [props.qry,optionsAnilist]);


  return (
    <Box>
    <Typography>{props.qry}</Typography>
    {seasons && (
      <ul>
        {seasons.map((season) => (
          <li key={season.id}>
            {/* Render AnimeCard component for each season */}
            {/* <AnimeCard anime={season} /> */}
            <AnimeCard anime={season}></AnimeCard>
            <hr />
          </li>
        ))}
      </ul>
    )}
  </Box>
  );
}
