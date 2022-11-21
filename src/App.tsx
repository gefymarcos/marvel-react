import './App.css'
import { useEffect, useState } from 'react'
import { getMovies } from './api'
import { sortByChronological, sortByReleaseDate } from './utils/sorter'
import { Movie } from './data/types/movies'
import { OrderType } from './data/types/order'
import { Header } from './components/header'
import { OrderOptions } from './components/orderOptions'
import { Card } from './components/card'

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [order, setOrder] = useState<OrderType>("RELEASE_DATE");

  useEffect(() => {
    getMovies().then(result => {
      const localOrder = getLocalOrder();
      setOrder(localOrder);
      orderMovies(localOrder, result);
      localStorage.setItem("data", JSON.stringify(result));
    });
  }, [])

  const orderMovies = (order: OrderType, movies: Movie[]) => {
    if (order === "RELEASE_DATE") {
      setMovies(sortByReleaseDate(movies));
    } else {
      setMovies(sortByChronological(movies));
    }
  }

  const getLocalOrder = () => {
    return localStorage.getItem("order") as OrderType || "RELEASE_DATE";
  }

  const handleOrder = (order: OrderType) => {
    setOrder(order);

    orderMovies(order, movies);

    localStorage.setItem("order", order);
  }

  return (
    <div className="App">
      <Header />

      <OrderOptions order={order} handleOrder={handleOrder} />

      <div className="appCardBox">
        {movies.map((movie: Movie) => (
          <div key={movie.index} className="appCard">
            <Card {...movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
