export interface Searched {
    page: number
    results: SearchedResult[]
    total_pages: number
    total_results: number
  }
  
  export interface SearchedResult {
    adult: boolean
    backdrop_path: string
    id: number
    title?: string
    original_language: string
    original_title?: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date?: string
    video?: boolean
    vote_average: number
    vote_count: number
    name?: string
    original_name?: string
    first_air_date?: string
    origin_country?: string[]
  }
  
  export interface RootGenre {
    genres: Genre[]
  }
  
  export interface Genre {
    id: number
    name: string
  }

  export interface RootTrailerResponse {
    id: string
    tmdb_id: number
    imdb_id: string
    language: string
    title: string
    url: string
    trailer: Trailer
    videos: Video[]
  }
  
  export interface Trailer {
    id: string
    youtube_video_id: string
    youtube_channel_id: string
    youtube_thumbnail: string
    title: string
    thumbnail: string
    language: string
    categories: string[]
    published: string
    views: number
  }
  
  export interface Video {
    id: string
    youtube_video_id: string
    youtube_channel_id: string
    youtube_thumbnail: string
    title: string
    thumbnail: string
    language: string
    categories: string[]
    published: string
    views: number
  }
  
  