import { useNavigate } from "react-router-dom"

export const StudentsList = ({list}) => {
    const navigate = useNavigate()
    return(
        <>
            <h2>Students List</h2>
            <button onClick={()=>navigate('createStudents')}>Create Student</button>
            {list.map((item,index)=> {
                return (
                    <li key={index}><span><b>Имя:</b> {item.studentName}</span> <b>Оценка:</b> <i>{item.assessment}</i></li>
                )
            })}
        </>
    )
}