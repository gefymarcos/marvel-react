import { IMDB_URL } from "../../config"
import { Movie } from "../../data/types/movies"
import { Button } from "./Button"
import { Image } from "./Image"
import './index.css'

export const Card = (movie: Movie) => {
  return (
    <>
      <h2  className="cardTitle">{movie.original_title}</h2>
      <div className="cardTop">
        <Image posterPath={movie.poster_path} />
        <div className="cardIconBox">
          <Button path={`${IMDB_URL}${movie.imdb_id}`} alt="Ver no IMDB" icon="imdb" />
          <Button path={movie.homepage} alt="Ver na Marvel" icon="marvel" />
        </div>
      </div>
      <div className="cardBottom">
        <p className="cardDescription">{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
      </div>
    </>
  )
}
