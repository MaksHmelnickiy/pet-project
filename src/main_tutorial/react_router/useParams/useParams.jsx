import { Outlet, useNavigate } from "react-router-dom"
import { Student } from "./students/Students"
import { StudentsList } from "./students/StudentsList"

export const UseParams = () => {
    const navigate = useNavigate()
    return <>
        {/* useParams — это хук из react-router-dom, который возвращает объект с параметрами динамического маршрута из текущего URL.
            Под "динамический маршрут" понимается путь, где часть адреса — это переменная, а не статичный текст. 
            например- /blog/:category/:postId
            : (двоеточие) перед словом означает, что это параметр. */}

            {/* В маршруте можно указать ? (знак вопроса) - это показывает что параметр будет не обязательным */}
            <h2>useParams()</h2>
            <div><button onClick={()=>navigate('students')}>Students</button></div>
            <div><button onClick={()=>navigate('books')}>Books</button></div>
            <Outlet />
    </>
}