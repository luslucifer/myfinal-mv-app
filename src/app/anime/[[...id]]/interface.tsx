export interface SearchAnime {
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
  
  export const Qry = `query($search:String){
    Media(search:$search,type:ANIME){
      title {
        romaji
        english
        native
        userPreferred
      }
    }
  }`

  export interface SearchedQry {
    data: Data
  }
  
  export interface Data {
    Media: Media
  }
  
  export interface Media {
    title: Title
  }
  
  export interface Title {
    romaji: string
    english: string
    native: string
    userPreferred: string
  }
  