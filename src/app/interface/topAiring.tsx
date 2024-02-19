export interface TopAiringAnime {
    currentPage: number
    hasNextPage: boolean
    results: Result[]
  }
  
  export interface Result {
    id: string
    title: string
    image: string
    url: string
    genres: string[]
  }
  