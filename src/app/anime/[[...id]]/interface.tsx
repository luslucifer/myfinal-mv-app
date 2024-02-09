export interface AnimeBox {
    qry: string;
  }
  
  export interface PageInfo {
    total: number;
    currentPage: number;
    lastPage: number;
    hasNextPage: boolean;
    perPage: number;
  }
  
  export interface Title {
    romaji?: string;
    english?: string;
  }
  
  export interface CoverImage {
    extraLarge: string;
  }
  
  export interface Media {
    id: number;
    title: Title;
    coverImage?: CoverImage;
    format?: string; // Add format field if it's part of the response
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
  
  export interface AniListResponse {
    data?: {
      Page?: {
        pageInfo?: PageInfo;
        media?: Media[];
      };
    };
  }
  