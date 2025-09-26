
export interface IMovie {
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

export interface Review {
    id: string;
    author: string;
    content: string;
    created_at: string;       
    iso_639_1: string;
    media_id: number;
    media_title: string;
    media_type: "tv" | "movie" | string;
    updated_at: string;     
    url: string;
  }

  export interface IMovieParams {
    page: string;
    sort_by?: string;
    "primary_release_date.gte"?: string;
    "primary_release_date.lte"?: string;
    with_genres?: string;
  }

  
export interface ICrew {
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
  place_of_birth: string | null;
  popularity: number;
  profile_path: string | null;
}
