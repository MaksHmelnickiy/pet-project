import React from "react";

export const Resize = () => {
    const [resize, setResize] = React.useState(0)


    React.useEffect(() => {
        
        const handleResize = () => {
            setResize(window.innerWidth);
            console.log("Ширина изменилась:", window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener(resize, handleResize) // return в useEffect должен вернуть функцию, а не результат функции.
    }
    }, []);
    return <>
        <div>{resize}</div>
    </>
}