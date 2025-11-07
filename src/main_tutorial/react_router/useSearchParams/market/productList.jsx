import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const products = [
  { id: 1, name: "Apple", category: "fruits", price: 10, color: "red" },
  { id: 2, name: "Banana", category: "fruits", price: 15, color: "yellow" },
  { id: 3, name: "Mango", category: "fruits", price: 25, color: "orange" },
  { id: 4, name: "Orange", category: "fruits", price: 20, color: "orange" },

  { id: 5, name: "Carrot", category: "vegetables", price: 12, color: "orange" },
  { id: 6, name: "Tomato", category: "vegetables", price: 18, color: "red" },
  { id: 7, name: "Potato", category: "vegetables", price: 8, color: "brown" },
  { id: 8, name: "Broccoli", category: "vegetables", price: 22, color: "green" },

  { id: 9, name: "Cola", category: "drinks", price: 30, color: "black" },
  { id: 10, name: "Water", category: "drinks", price: 5, color: "blue" },
  { id: 11, name: "Juice", category: "drinks", price: 18, color: "yellow" },
  { id: 12, name: "Tea", category: "drinks", price: 12, color: "brown" }
]

export const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [word, setWord] = useState('');

  const nameParam = searchParams.get('name') || '';
  const categoryParam = searchParams.get('category') || 'all';

  // фильтрация по name и category
  const filter = products.filter(item => {
    const matchesName = item.name.toLowerCase().includes(nameParam.toLowerCase());
    const matchesCategory = categoryParam === 'all' || item.category === categoryParam;
    return matchesName && matchesCategory;
  });

  const categories = ['all', ...Array.from(new Set(products.map(item => item.category)))];

  const handle = (e) => {
    const value = e.target.value;
    setWord(value);
    if (value) {
      setSearchParams({ name: value, category: categoryParam });
    } else {
      setSearchParams({ category: categoryParam });
    }
  };

  const handleSelect = (e) => {
    const value = e.target.value;
    if (value === 'all') {
      setSearchParams({ name: word });
    } else {
      setSearchParams({ name: word, category: value });
    }
  };

  return (
    <div>
      <h2>Market</h2>
      <input value={word} onChange={handle} placeholder="Search by name..." />
      <select value={categoryParam} onChange={handleSelect}>
        {categories.map((item, id) => (
          <option key={id} value={item}>
            {item}
          </option>
        ))}
      </select>

      {filter.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};
