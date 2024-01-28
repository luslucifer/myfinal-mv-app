export interface CastDetails {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday: string | null;
    gender: number;
    homepage: string | null;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string | null;
  }
  
  export interface CastCreadits {
    cast: Cast[];
    crew: Crew[];
    id: number;
  }
  
  export interface Cast {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average: number;
    vote_count: number;
    character: string;
    credit_id: string;
    order?: number;
    media_type: string;
    origin_country?: string[];
    original_name?: string;
    first_air_date?: string;
    name?: string;
    episode_count?: number;
    // Nested Crew array
    crew?: Crew[];
  }
  
  export interface Crew {
    adult: boolean;
    backdrop_path: any;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    credit_id: string;
    department: string;
    job: string;
    media_type: string;
  }
  
  export interface CastExternalIds {
    id: number
    freebase_mid: string
    freebase_id: string
    imdb_id: string
    tvrage_id: number
    wikidata_id: string
    facebook_id: string
    instagram_id: string
    tiktok_id: string
    twitter_id: string
    youtube_id: string
  }

  export interface CastImages {
    id: number
    profiles: Profile[]
  }
  
  export interface Profile {
    aspect_ratio: number
    height: number
    iso_639_1: any
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  