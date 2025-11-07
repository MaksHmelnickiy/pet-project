import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export const smartphones = [
  { id: 1, name: "iPhone 14", brand: "Apple", color: "black", memory: 128 },
  { id: 2, name: "iPhone 14 Pro", brand: "Apple", color: "gold", memory: 256 },
  { id: 3, name: "Galaxy S22", brand: "Samsung", color: "white", memory: 128 },
  { id: 4, name: "Galaxy S23 Ultra", brand: "Samsung", color: "black", memory: 512 },
  { id: 5, name: "Pixel 7", brand: "Google", color: "green", memory: 128 },
  { id: 6, name: "Pixel 8 Pro", brand: "Google", color: "blue", memory: 256 },
  { id: 7, name: "Xiaomi 13", brand: "Xiaomi", color: "white", memory: 256 },
  { id: 8, name: "Xiaomi Redmi Note 12", brand: "Xiaomi", color: "blue", memory: 128 }
];
export const SmartphonesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState('');
  const name = searchParams.get('name') || '';
  const brandParams = searchParams.get('brand') || 'all';
  const filtered = smartphones.filter(item => {
    const a = item.name.toLowerCase().includes(name.toLowerCase());
    const b = brandParams === 'all' || item.brand === brandParams
    return a && b
  });
  const brands = ['all', ...Array.from(new Set(smartphones.map(item => item.brand)))];
  const onChange = (e) => {
    const value = e.target.value;
    if(value){
      setState(value)
      setSearchParams({name: value, brand: brandParams});
    }
    else{
      setState('')
      setSearchParams({brand: brandParams})
    }
  }
  const onChangeParams = (e) => {
   const value = e.target.value;
   if(value === 'all'){
    setSearchParams({name: state})
   }
   else{
    setSearchParams({name: state, brand: value})
   }

  }
  return <><div>
    <select value={brandParams} onChange={onChangeParams} >
      {brands.map(item => {
        return <option key={item.id}>{item}</option>
      })}
    </select>
    <input type="text" value={state} onChange={onChange} />
    
    {filtered.map((item,key) => {
      return <div key={key}>{item.name}</div>
    })}
  </div></>
}