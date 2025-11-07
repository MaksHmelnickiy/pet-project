import React from "react"
export const ListForm = ({onAdd}) => {
    const [input, setInput] = React.useState('')
    const handleForm = (e) => {
        e.preventDefault();
        if(!input.trim()) return; // Игнорируем пустые строки
        onAdd(input.trim());
        setInput('');
    }
    return (
        <form onSubmit={handleForm}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type="submit">Create</button>
        </form>
    )
}