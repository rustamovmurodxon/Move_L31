import { useMovie } from "@/entities/movie";
import { Hero } from "@/widgets/hero";
import { MovieList } from "@/widgets/movie-list";
import { memo } from "react";

export const Home = memo(() => {
  const {getMovies} = useMovie()
  const {data} = getMovies()
  
  return <div>
    <Hero data={data?.results} />
    <MovieList movies={data?.results.slice(0, 4)}/>
  </div>;
});
