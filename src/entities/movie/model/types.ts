
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
