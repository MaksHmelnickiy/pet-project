import { Outlet, useNavigate } from "react-router-dom"

export const UseSearchParams = () => {
    const navigate = useNavigate()
    return <>
        <h2>useSearchParams</h2>
        {/* useSearchParams — это hook для работы с query-параметрами (строка после ? в URL). */}
        {/* /books?genre=fantasy&year=2021
        genre=fantasy
        year=2021
        Эти параметры мы можем использовать для фильтрации/поиска/сортировки. */}
        <button onClick={()=> navigate('fruits')}>Fruits</button>
        <button onClick={()=> navigate('market')}>Market</button>
        <button onClick={()=> navigate('smartphones')}>Smartphones</button>
        <button onClick={()=> navigate('automobiles')}>Automobies</button>
        <Outlet />
    </>
}