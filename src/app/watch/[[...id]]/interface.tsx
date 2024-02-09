export interface QryResult {
    currentPage: number
    hasNextPage: boolean
    results: Result[]
  }
  
  export interface Result {
    id: string
    title: string
    url: string
    image: string
    releaseDate: string
    subOrDub: string
  }
  
  export var query = `
  query GetAnime($id: Int) {
    anime: Media(id: $id, type: ANIME) {
      id
      bannerImage
      title {
        romaji
        english
        native
      }
      description
      coverImage {
        large
        medium
        extraLarge
      }
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
      status
      episodes
      duration
      genres
      averageScore
      
      characters: characters(page: 1, perPage: 100) {
        edges {
          node {
            id
            name {
              first
              middle
              last
              full
              native
              userPreferred
            }
            description
            image {
              large
            }
            gender
            dateOfBirth {
              year
              month
              day
            }
            siteUrl
          }
        }
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
      }
    }
  }
`;

export interface AnimeData {
    data: Data
  }
  
  export interface Data {
    anime: Anime
  }
  
  export interface Anime {
    id: number
    bannerImage: string
    title: Title
    description: string
    coverImage: CoverImage
    startDate: StartDate
    endDate: EndDate
    status: string
    episodes: number
    duration: number
    genres: string[]
    averageScore: number
    characters: Characters
  }
  
  export interface Title {
    romaji: string
    english: string
    native: string
  }
  
  export interface CoverImage {
    large: string
    medium: string
    extraLarge:string
  }
  
  export interface StartDate {
    year: number
    month: number
    day: number
  }
  
  export interface EndDate {
    year: number
    month: number
    day: number
  }
  
  export interface Characters {
    edges: Edge[]
    pageInfo: PageInfo
  }
  
  export interface Edge {
    node: Node
  }
  
  export interface Node {
    id: number
    name: Name
    description?: string
    image: Image
    gender: string
    dateOfBirth: DateOfBirth
    siteUrl: string
  }
  
  export interface Name {
    first: string
    middle?: string
    last: string
    full: string
    native: string
    userPreferred: string
  }
  
  export interface Image {
    large: string
  }
  
  export interface DateOfBirth {
    year: any
    month?: number
    day?: number
  }
  
  export interface PageInfo {
    total: number
    perPage: number
    currentPage: number
    lastPage: number
    hasNextPage: boolean
  }
  
  export interface WatchList {
    headers: Headers
    sources: Source[]
    download: string
    message :string
  }
  
  export interface Headers {
    Referer: string
  }
  
  export interface Source {
    url: string
    isM3U8: boolean
    quality: string
  }
  
  export interface AnimeInfo {
    id: string
    title: string
    url: string
    genres: string[]
    totalEpisodes: number
    image: string
    releaseDate: string
    description: string
    subOrDub: string
    type: string
    status: string
    otherName: string
    episodes: Episode[]
  }
  
  export interface Episode {
    id: string
    number: number
    url: string
  }
  