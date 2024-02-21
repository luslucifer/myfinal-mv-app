export interface Root {
    id: number
    keywords: Keyword[]
  }
  
  export interface Keyword {
    id: number
    name: string
  }
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmYyYTllOWIwZjVlZWQ4MWI0Y2FiZTM1ZDVhOWMxYiIsInN1YiI6IjY0ZmViZGFhZGI0ZWQ2MTAzODU1MjkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3tF5McjnvghWciYB--s1b7Aj4hQW4SCRpIkaXn8Feig'
    }
  };
  
async function getKeyWords(id:number,type:string){
    const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}/keywords`, options)
    return res.json()
}

interface Keywords{
    id :number
    type :string
}

export async  function Keywords(props:Keywords){
    const keyWords:Root = await getKeyWords(props.id,props.type)

    console.log(keyWords)
    

}