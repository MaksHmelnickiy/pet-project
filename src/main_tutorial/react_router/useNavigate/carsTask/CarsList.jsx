import { useNavigate } from "react-router-dom"

export const CarsList = ({cars}) => {
    const navigate = useNavigate('')

    return (
        <>
            <h2>Список машин</h2>
            <div><button onClick={()=> navigate('createCar')}>Create Car</button></div>
            <ul>
                {cars.map((item, i) => {
                    return (
                        <li key={i}><strong>{item.model}</strong> <strong>{item.release}</strong></li>
                    )
                })}
            </ul>
        </>
    )
}