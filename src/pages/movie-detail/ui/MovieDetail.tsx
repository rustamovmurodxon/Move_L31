import { MovieInfo, useMovie } from '@/entities/movie'
import { MovieList } from '@/widgets/movie-list'
import { memo } from 'react'
import { Outlet, useParams } from 'react-router-dom'

export const MovieDetail =memo (() => {
const {id}=useParams()
const {getMovieById}=useMovie()
const { getMovieInfo } = useMovie();

const { data } = getMovieInfo(id as string, "similar");
getMovieById(id as string)
    return (
    <div>
      <MovieInfo id={id as string} />
      
      <Outlet context={{id}} />

      <MovieList movies={data?.results?.slice(0, 4)}/>
    </div>
  )
})