
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmYyYTllOWIwZjVlZWQ4MWI0Y2FiZTM1ZDVhOWMxYiIsInN1YiI6IjY0ZmViZGFhZGI0ZWQ2MTAzODU1MjkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3tF5McjnvghWciYB--s1b7Aj4hQW4SCRpIkaXn8Feig'
    }
  };

   
  interface Movie {
    adult: boolean;
    backdrop_path: string;
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
  }

  interface MovieResponse {
    page: number;
    results: Movie[];
  }  


  function filterMoviesByKeys(movies: MovieArray[]): MovieArray[] {
    const validKeys = [
      'adult',
      'genre_ids',
      'id',
      'original_language',
      'overview',
      'popularity',
      'vote_average',
      'vote_count',
      'character',
      'credit_id',
      'media_type',
    ];
  
    return movies.filter((movie) => {
      const keys = Object.keys(movie);
      return validKeys.every((key) => keys.includes(key));
    });
  }




  function formatDateToWords(dateString) {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const [year, month, day] = dateString.split('-');
    const monthWord = months[parseInt(month, 10) - 1];
  
    return `${monthWord} ${parseInt(day, 10)}, ${year}`;
  }
  

  function parseTimestamp(isoTimestamp:string) {
    const dateObj = new Date(isoTimestamp);
  
    const options6 = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedString = dateObj.toLocaleDateString('en-US', options6);
  
    return formattedString;
  }
  



  export {options,formatDateToWords,filterMoviesByKeys,parseTimestamp}
  export type{Movie,MovieResponse}
