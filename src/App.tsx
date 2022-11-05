import './App.css'
import { useEffect, useState } from 'react'
import { getMovies } from './api'
import { IMAGE_URL, IMDB_URL } from './config'
import { Icon } from './components/icon'
import { sortByChronological, sortByReleaseDate } from './utils/sorter'
import { Movie } from './data/types/movies'
import { OrderType } from './data/types/order'
import { Header } from './components/header'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [order, setOrder] = useState<OrderType>("RELEASE_DATE");

  useEffect(() => {
    getMovies().then(result => {
      setMovies(result)
      localStorage.setItem("data", JSON.stringify(result))
    });
  }, [])

  useEffect(() => {
    setOrder(localStorage.getItem("order") as OrderType || "RELEASE_DATE");
  }, [])

  const handleOrder = (order: OrderType) => {
    setOrder(order);

    if (order === "RELEASE_DATE") {
      setMovies(sortByReleaseDate(movies));
    } else {
      setMovies(sortByChronological(movies));
    }

    localStorage.setItem("order", order);
  }

  return (
    <div className="App">
      <Header />

      <div>
        <div className="buttons">
          <p>Ordenar por:</p>
          <div>
            <button className={order === "RELEASE_DATE" ? "selected" : "default"} onClick={() => handleOrder("RELEASE_DATE")}>Ordem de lançamento</button>
            <button className={order === "CHRONOLOGICAL" ? "selected" : "default"} onClick={() => handleOrder("CHRONOLOGICAL")}>Ordem cronológica</button>
          </div>
        </div>
        <p className="appOrderBy">order by @rodrigo_souza_feliciano</p>
      </div>

      <div className="cardBox">
        {movies.map((movie: Movie, index: number) => {
          return (
            <div key={index} className="card">
              <h2  className="title">{movie.original_title}</h2>
              <div className="top">
                <img className="appImg" src={`${IMAGE_URL}/${movie.poster_path}`} />
                <div className="iconBox">
                  <Icon path={`${IMDB_URL}${movie.imdb_id}`} alt="Ver no IMDB" icon="imdb" />
                  <Icon path={movie.homepage} alt="Ver na Marvel" icon="marvel" />
                </div>
              </div>
              <div key={movie.imdb_id}>
                <p className="overviewBox">{movie.overview}</p>
                <p>Release date: {movie.release_date}</p>
              </div>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default App
