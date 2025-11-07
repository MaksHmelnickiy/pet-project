import { useNavigate, Outlet } from "react-router-dom"
import { CarsLayout } from "./carsTask/CarsLayout"


export const UseNavigate = () => {
    const navigate = useNavigate()
    return(
        // # 🔁 React Router — `useNavigate`
        // `useNavigate` — хук из `react-router-dom`, который позволяет **программно менять маршрут**.

        // Когда использовать?
        // * После отправки формы (например, регистрации)
        // * После создания или удаления данных
        // * При кнопке «Назад» или «Перейти»

        // ### 🧭 Особенности `useNavigate`

        // | Метод                                  | Описание                                  |
        // |--------------------------------------|-------------------------------------------|
        // | `navigate('/path')`                    | Перейти по маршруту                       |
        // | `navigate(-1)`                         | Назад на одну страницу (аналог кнопки Back) |
        // | `navigate('/path', { replace: true })` | Перейти **без добавления** в историю браузера |

        // ---

        // ### 🧩 Аналог в браузере

        // Это как `window.history.pushState()` или `location.assign()` — только в мире React Router.

        <>
            <div>
                <button type="button" onClick={()=> navigate('carsLayout')}>Cars Task</button>
            </div>

            <div>
                <button type="button" onClick={()=> navigate('studentsLayout')}>Students Task</button>
            </div>
            
            <Outlet />
        </>
    )
}