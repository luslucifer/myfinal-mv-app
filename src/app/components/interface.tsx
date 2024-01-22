export interface CastRoot {
    id: number
    cast: Cast[]
    crew: Crew[]
  }
  
  export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    cast_id: number
    character: string
    credit_id: string
    order: number
  }
  
  export interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path?: string
    credit_id: string
    department: string
    job: string
  }


  

  export interface RootImages {
    backdrops: Backdrop[]
    id: number
    logos: Logo[]
    posters: Poster[]
  }
  
  export interface Backdrop {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Logo {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }
  
  export interface Poster {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
  }

  
  export interface RootSimilar {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  export interface Result {
    adult: boolean
    backdrop_path?: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  
  export interface RootVideos {
    id: number
    results: Result[]
  }
  
  export interface Videos {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
  }
  

  export interface RootRecomandation {
    page: number
    results: Result[]
    total_pages: number
    total_results: number
  }
  
  export interface ResultRecomandation {
    adult: boolean
    backdrop_path?: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  


  export interface CreditM {
    id: number;
    cast: {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path?: string;
      cast_id: number;
      character: string;
      credit_id: string;
      order: number;
    }[];
    crew: {
      adult: boolean;
      gender: number;
      id: number;
      known_for_department: string;
      name: string;
      original_name: string;
      popularity: number;
      profile_path?: string;
      credit_id: string;
      department: string;
      job: string;
    }[];
  }
  
  export interface RootImagesM {
    id: number;
    images: {
      backdrops: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      logos: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      posters: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    };
  }
  
  export interface RootSimilarM {
    page: number;
    results: {
      adult: boolean;
      backdrop_path?: string;
      genre_ids: number[];
      id: number;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      release_date: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
  }
  
  export interface RootVideosM {
    id: number;
    results: {
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      key: string;
      site: string;
      size: number;
      type: string;
      official: boolean;
      published_at: string;
      id: string;
    }[];
  }
  
  export interface RootRecomandationM {
    page: number;
    results: {
      adult: boolean;
      backdrop_path?: string;
      id: number;
      title: string;
      original_language: string;
      original_title: string;
      overview: string;
      poster_path: string;
      media_type: string;
      genre_ids: number[];
      popularity: number;
      release_date: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }[];
    total_pages: number;
    total_results: number;
  }
  

 export interface MovieDetailsM {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    };
    budget: number;
    genres: {
      id: number;
      name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }[];
    production_countries: {
      iso_3166_1: string;
      name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
      english_name: string;
      iso_639_1: string;
      name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }