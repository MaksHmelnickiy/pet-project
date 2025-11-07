import { useNavigate, useOutletContext } from "react-router-dom"

export const AddStudentsForm = () => {

    const navigate = useNavigate()
    const {onAddStudent} = useOutletContext()
    const on = (e) => {
        e.preventDefault()
        const student = e.target.elements 

        onAddStudent({studentName: student['studentName'].value , assessment: student['assessment'].value})
    }
    return (
        <form className="car-form" onSubmit={on}>
            <div className="form-group">
                <label>Student Name: </label>
                <input type="text" name='studentName' placeholder="Student Name" />
            </div>
            <div className="form-group">
                <label>Assessment:</label>
                <input type="number" name='assessment' placeholder="Assessment" />
            </div>
            <button type='button' className="submit-btn s" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="submit-btn">Create</button>
        </form>
    )
}