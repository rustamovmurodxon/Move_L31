import { memo } from "react";
import { useParams } from "react-router-dom";
import { MovieList } from "../../../widgets/movie-list";
import { useCrew } from "@/entities/crew/model/useCrew";
import { CrewView } from "@/entities/crew/ui/CrewView";

export const CrewDetail = memo(() => {
  const { id } = useParams();
  const { getCrewMovieById } = useCrew();
  const { data: moviesCrew } = getCrewMovieById(id as string);

  return (
    <div>
      <CrewView />
      <MovieList movies={moviesCrew?.cast} />
    </div>
  );
});
