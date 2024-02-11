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
  } | undefined;
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
      });
      setSeasons(fetchedSeasons);
    } else {
      console.log(`No anime seasons found for "${qry}".`);
    }
  }

  function handleError(error: Error) {
    console.error('Error:', error.message || error);
  }

  // Function to get the season number based on the startDate for TV seasons
  function getSeasonNumber(startDate: { year: number, month: number, day: number } | undefined, format: string): number | null {
    // Check if the format is "TV" and startDate is defined
    if (format === 'TV' && startDate) {
      // Access startDate properties safely
      const { year, month, day } = startDate;

      // Add your logic to determine the season number based on the startDate
      // For example, you might want to return the month as the season number
      return month;
    }

    // Return null for non-TV seasons or if startDate is undefined
    return null;
  }

  useEffect(() => {
    fetch(url, optionsAnilist)
      .then(handleResponse)
      .then(handleData)
      .catch(handleError);
  }, [qry, optionsAnilist]);

  return (
    <Box>
      <Typography>{qry}</Typography>
      {seasons && (
        <ul>
          {seasons.map((season) => (
            <li key={season.id}>
              {/* Render AnimeCard component for each season */}
              <AnimeCard anime={season}></AnimeCard>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
}
