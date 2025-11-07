import { useParams } from "react-router-dom"

export const Student = () => {
    const params = useParams()
    console.log(params)
    return<>
        <h2>ID: {params.id}</h2>
    </>
}