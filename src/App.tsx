import { useEffect, useState } from 'react'
import './App.css'
import { getMovies } from './api'
import { IMAGE_URL, IMDB_URL } from './config'
import { Icon } from './components/icon'
import { sortByChronological, sortByReleaseDate } from './utils/sorter'

type OrderType = "CHRONOLOGICAL" | "RELEASE_DATE";

function App() {
  const [data, setData] = useState<any>([])
  const [order, setOrder] = useState<OrderType>("RELEASE_DATE");

  useEffect(() => {
    getMovies().then(result => {
      setData(result ? result : [])
      localStorage.setItem("data", JSON.stringify(result))
    });
  }, [])

  useEffect(() => {
    setOrder(localStorage.getItem("order") as OrderType || "RELEASE_DATE");
  }, [])

  const handleOrder = (order: OrderType) => {
    setOrder(order);

    if (order === "RELEASE_DATE") {
      setData(sortByReleaseDate(data));
    } else {
      setData(sortByChronological(data));
    }

    localStorage.setItem("order", order);
  }

  return (
    <div className="App">
      <h1>Saga do Infinito</h1>
      
      <div className="buttonBoxes">
        <div className="buttons">
          <p>Ordenar por:</p>
          <button className={order === "RELEASE_DATE" ? "selected" : "default"} onClick={() => handleOrder("RELEASE_DATE")}>Ordem de lançamento</button>
          <button className={order === "CHRONOLOGICAL" ? "selected" : "default"} onClick={() => handleOrder("CHRONOLOGICAL")}>Ordem cronológica</button>
        </div>
        <p>order by @rodrigo_souza_feliciano</p>
      </div>

      <div className="cardBox">
        {data.map((dt: any) => {
          return (
            <div className="card">
              <h2  className="title">{dt.original_title}</h2>
              <div className="top">
                <img src={`${IMAGE_URL}/${dt.poster_path}`} />
                <div className="iconBox">
                  <Icon path={`${IMDB_URL}${dt.imdb_id}`} alt="Ver no IMDB" icon="imdb" />
                  <Icon path={dt.homepage} alt="Ver na Marvel" icon="marvel" />
                </div>
              </div>
              <p key={dt.imdb_id}>
                <p className="overviewBox">{dt.overview}</p>
                <p>Release date: {dt.release_date}</p>
              </p>
            </div>
          )}
        )}
      </div>
    </div>
  )
}

export default App
