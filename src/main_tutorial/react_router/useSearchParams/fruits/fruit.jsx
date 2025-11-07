import { useParams } from "react-router-dom"

export const Fruit = () => {
    const params = useParams()
    return <><h2>ID: {params.id}</h2></>
}