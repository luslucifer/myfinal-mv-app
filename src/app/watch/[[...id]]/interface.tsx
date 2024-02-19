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
  
  export const qry = `query($search:String){
    Media(search:$search , type: ANIME) {
      id
      bannerImage
      recommendations{
        nodes {
          id
          mediaRecommendation{
            title {
              romaji
              english
              native
              userPreferred
            }
            startDate {
              year
              month
              day
            }
            coverImage{
              extraLarge
            }
          }
        }
      }
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
    
    relations {
      nodes {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        startDate {
          year
          month
          day
        }
				coverImage {
				  extraLarge
				  large
				  medium
				  color
				}
      }
    }
      
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
  }`


  export interface Qry {
    
    data: Data
    errors:RootError
  }
  
  export interface RootError {
    errors: Error[]
    data: Data
  }
  
  export interface Error {
    message: string
    status: number
    locations: Location[]
  }
  
  export interface Location {
    line: number
    column: number
  }
  
  export interface Data {
    anime: any
  }
  export interface Data {
    Media: Media
  }
  
  export interface Media {
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
    relations: Relations
    characters: Characters
    recommendations:Recommendations
  }
  
  export interface Title {
    romaji: string
    english: string
    native: string
  }
  
  export interface CoverImage {
    large: string
    medium: string
    extraLarge: string
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
  
  export interface Relations {
    nodes: Node[]
  }
  
  export interface Node {
    id: number
    title: Title2
    coverImage: CoverImage2
    startDate:StartDate
  }
  
  export interface Title2 {
    romaji: string
    english?: string
    native: string
    userPreferred: string
  }
  
  export interface CoverImage2 {
    extraLarge: string
    large: string
    medium: string
    color: string
  }
  
  export interface Characters {
    edges: Edge[]
    pageInfo: PageInfo
  }
  
  export interface Edge {
    node: Node2
  }
  
  export interface Node2 {
    
    id: number
    name: Name
    description?: string
    image: Image
    gender?: string
    dateOfBirth: DateOfBirth
    siteUrl: string
  }
  
  export interface Name {
    first: string
    middle: any
    last?: string
    full: string
    native: string
    userPreferred: string
  }
  
  export interface Image {
    large: string
  }
  
  export interface DateOfBirth {
    year?: number
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
  

  // animeInfo 

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
    message:string
  }
  
  export interface Episode {
    id: string
    number: number
    url: string
  }
  

  // recommendation 

  export interface Recommendations {
    nodes: Node[]
  }
  
  export interface Node {
    id: number
    mediaRecommendation: MediaRecommendation
  }
  
  export interface MediaRecommendation {
    title: Title
    startDate: StartDate
    coverImage: CoverImage
  }
  
  export interface Title {
    romaji: string
    english: string
    native: string
    userPreferred: string
  }
  
  export interface StartDate {
    year: number
    month: number
    day: number
  }
  
  export interface CoverImage {
    extraLarge: string
  }
  
  