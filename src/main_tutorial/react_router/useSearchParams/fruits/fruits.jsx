import { Link, useSearchParams } from "react-router-dom"
import "./fruits.css"

export const fruits = [
  { id: "1", name: "Apple", color: "Red", price: 30 },
  { id: "2", name: "Orange", color: "Orange", price: 25 },
  { id: "3", name: "Banana", color: "Yellow", price: 20 },
  { id: "4", name: "Grapes", color: "Purple", price: 40 },
  { id: "5", name: "Kiwi", color: "Green", price: 35 },
]


export const Fruits = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get("name") || ""
  const filtered = fruits.filter(item =>
    item.name.toLowerCase().includes(name.toLowerCase())
  )

  const handle = (e) => {
    if (e.target.value) {
      setSearchParams({ name: e.target.value })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="fruits-container">
      <input
        onChange={handle}
        className="fruits-input"
        placeholder="Search fruits..."
      />
      <div className="fruits-list">
        {filtered.map((item, key) => (
          <Link to={`${item.id}`} key={key} className="fruit-item">
            <div className="fruit-name">{item.name}</div>
            <div className="fruit-info">
              <span>ID: {item.id}</span>
              <span>Color: {item.color}</span>
              <span>Price: ${item.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
