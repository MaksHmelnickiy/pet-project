import React from "react"

export const Timer = () => {
    const [time, setTime] = React.useState(0);
    const [start, setStart] = React.useState(false)

    React.useEffect(() => {

        if(!start) return; //// Если не запущено — сразу выйходит из юзЕффект и не читает функцию дальше .

        const int = setInterval(()=>  {setTime(prev => prev + 1)} ,1000);
        return (
            () => clearInterval(int)
        );
    },[start])
    return (
        <>
            <hr />
            <br />
            <h2>Timer</h2>
            <div>{time}</div>
            <div><button onClick={() => setStart(true)}>Start</button></div>
            <div><button onClick={() => setStart(false)}>Stop</button></div>
            <br />
        </>
    )
}