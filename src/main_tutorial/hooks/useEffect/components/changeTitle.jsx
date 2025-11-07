import { useEffect, useState } from "react";

export const ChangeTitle = () => {
    const [title, setTitle] = useState(new Date().getMilliseconds().toLocaleString())

    useEffect(() => {
        document.title = title
    }, [title])

    const handleTitle = () => {
       setTitle(new Date().getMilliseconds().toLocaleString())
    }

    return (
        <>
            <div>
                <hr />
                <br />
                <h2>Change Title</h2>
                
            </div>
            <button onClick={handleTitle}>Change Title</button>
            <div>
                <br />
                <hr />
            </div>
        </>
    )
}
