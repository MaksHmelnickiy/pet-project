import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const autos = [
  { id: 1, name: "Model S", brand: "Tesla", color: "black", price: 90000 },
  { id: 2, name: "Model 3", brand: "Tesla", color: "white", price: 55000 },
  { id: 3, name: "Mustang", brand: "Ford", color: "red", price: 60000 },
  { id: 4, name: "Civic", brand: "Honda", color: "blue", price: 25000 },
  { id: 5, name: "Accord", brand: "Honda", color: "gray", price: 30000 },
  { id: 6, name: "Camry", brand: "Toyota", color: "white", price: 28000 },
  { id: 7, name: "Corolla", brand: "Toyota", color: "black", price: 23000 },
  { id: 8, name: "A4", brand: "Audi", color: "blue", price: 45000 },
  { id: 9, name: "VW", brand: "Audi", color: "blue", price: 35000 },
];

export const Automobiles = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const minPrice = autos.reduce((prev, current) => current.price < prev ? current.price : prev, Infinity)
  const maxPrice = autos.reduce((prev, current) => current.price > prev ? current.price : prev, -Infinity)

  const [currentPrice, setCurrentPrice] = useState(minPrice);
  const [state, setState] = useState("");

  const nameParam = searchParams.get("name") || "";
  const colorParam = searchParams.get("color") || "all";
  const brandParam = searchParams.get("brand") || "all";
  const priceParam = searchParams.get("price") || minPrice;

  const filtered = autos.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(nameParam.toLowerCase());
    const matchesColor = colorParam === "all" || item.color === colorParam;
    const matchesBrand = brandParam === "all" || item.brand === brandParam;
    const matchesPrice = priceParam === minPrice || item.price === priceParam
    return matchesName && matchesColor && matchesBrand && matchesPrice;
  });

  console.log(minPrice, maxPrice)

  const colorOptions = ["all", ...Array.from(new Set(autos.map((a) => a.color)))];
  const brandOptions = ["all", ...Array.from(new Set(autos.map((a) => a.brand)))];

//you suck
  const handleName = (e) => {
    const value = e.target.value;
    setState(value);
    const params = Object.fromEntries(searchParams.entries());
    params.name = value;
    setSearchParams(params);
    console.log()
  };

  const handleColor = (e) => {
    const value = e.target.value;
    const params = Object.fromEntries(searchParams.entries());
    if (value === "all") delete params.color;
    else params.color = value;
    setSearchParams(params);
  };

  const handleBrand = (e) => {
    const value = e.target.value;
    const params = Object.fromEntries(searchParams.entries());
    console.log(params)
    if (value === "all") delete params.brand;
    else params.brand = value;
    setSearchParams(params);
  };

  const handleRange = (e) => {
    const value = e.target.value
    setCurrentPrice(value)
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🚗 Automobile Market</h2>

      <div style={styles.filters}>
        <select onChange={handleColor} value={colorParam} style={styles.select}>
          {colorOptions.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select onChange={handleBrand} value={brandParam} style={styles.select}>
          {brandOptions.map((item, key) => (
            <option key={key} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          value={state}
          onChange={handleName}
          style={styles.input}
        />

        <div>
            <input
          type="range"
          min={minPrice}
          max={maxPrice}
          onChange={handleRange}
          style={styles.range}
            />
        <span>min: ^^ {minPrice} ^^</span>
        <span>current ^^ {currentPrice} ^^</span>
        <span>max: ^^ {maxPrice} ^^</span>
        </div>
      </div>

      <div style={styles.list}>
        {filtered.map((item) => (
          <div key={item.id} style={styles.card}>
            <h4>{item.name}</h4>
            <p>
              Brand: <b>{item.brand}</b>
            </p>
            <p>
              Color: <span style={{ color: item.color }}>{item.color}</span>
            </p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- простые inline стили ---
const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    fontFamily: "system-ui, sans-serif",
    color: "#333",

  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  filters: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  select: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  input: {
    padding: "8px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    width: "150px",
  },
  range: {
    width: "150px",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "15px",
  },
  card: {
    border: "1px solid #eee",
    borderRadius: "12px",
    padding: "10px 15px",
    boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
    background: "#fafafa",
    transition: "0.2s",
  },
};
