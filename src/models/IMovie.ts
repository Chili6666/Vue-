export interface IMovie {
    id: number;
    adult : boolean;
    title: string;
    original_title: string;
    overview: string;
    poster_path: string;
    backdrop_path : string
    vote_average : number;
    vote_count:number;
    release_date: Date
    full_poster_path : string;
  }