import { Outlet } from "react-router-dom"

import { useState } from "react"
import {CarsList} from './CarsList'

export const CarsLayout = () => {
    const [cars, setCars] = useState([{model:'test',release:'2100'}])
    const handleCars = (car) => {
        setCars(prev => [...prev, car]) //React гарантирует, что prev — это актуальное состояние, даже если несколько setState идут подряд
    }
    return(
        <>
            <h2>Cars Task</h2>
            вывы
            <CarsList cars={cars} />
            <Outlet context={{onAddCar: handleCars}} />{/* Outlet context — это способ передать данные от родительского маршрута к дочернему. */}
        </>
    )
}