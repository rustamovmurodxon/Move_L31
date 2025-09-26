import { useMovie } from '@/entities/movie';
import { Movie_pagination } from '@/features/move_pagination';
import { MovieList } from '@/widgets/movie-list';
import { MovieSort } from '@/widgets/movie_sorted';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movie = memo(() => {
  // const { getMovies } = useMovie();
  // const { data } = getMovies();



  const { getMovies } = useMovie();
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const sort_by = searchParams.get("sort") ?? "";
  const gte = searchParams.get("gte") ?? "";
  const lte = searchParams.get("lte") ?? "";
  const with_genres = searchParams.get("with_genres") ?? "";

  const { data } = getMovies({
    page,
    sort_by,
    "primary_release_date.gte": gte,
    "primary_release_date.lte": lte,
    with_genres,
  });


  
  return (
    <div className="About">
      <div>
        <MovieSort/>
      </div>
      <MovieList movies={data?.results}/>
      <Movie_pagination page={page} total_pages={data?.total_results} />
    </div>
  );
});
