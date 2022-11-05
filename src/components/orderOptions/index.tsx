import { OrderType } from "../../data/types/order"
import "./index.css"

type OrderOptionsType = {
  order: OrderType,
  handleOrder: (order: OrderType) => void
}

export const OrderOptions = ({
  order,
  handleOrder
}: OrderOptionsType) => {
  return (
    <div>
      <div className="orderOptionsButtons">
        <p>Ordenar por:</p>
        <div>
          <button className={order === "RELEASE_DATE" ? "orderOptionsSelected" : "orderOptionsDefault"} onClick={() => handleOrder("RELEASE_DATE")}>Ordem de lançamento</button>
          <button className={order === "CHRONOLOGICAL" ? "orderOptionsSelected" : "orderOptionsDefault"} onClick={() => handleOrder("CHRONOLOGICAL")}>Ordem cronológica</button>
        </div>
      </div>
      <p className="orderOptionsAppOrderBy">order by @rodrigo_souza_feliciano</p>
    </div>
  )
}
