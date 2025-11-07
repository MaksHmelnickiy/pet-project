import { Outlet } from "react-router-dom"
import { StudentsList } from "./StudentsList"
import { useState } from "react"
export const StudentsLayout = () => {
    const [students, setStudents] = useState([{studentName: 'Victor', assessment: '5'}])
    const onCreate = (student) => {
        setStudents(prev => [...prev , student])
    }
    return <>
        <StudentsList list={students} />
        <Outlet context={{onAddStudent: onCreate}} />
    </>
}