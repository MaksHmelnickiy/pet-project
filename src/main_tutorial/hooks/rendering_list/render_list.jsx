import React from "react";
import './style.css';
import { ListForm } from "./listForm";

export const RenderLists = () => {
    const initialList = [
        { id: 0, title: 'Задача №1', done: false },
        { id: 1, title: 'Задача №2', done: false }
    ];

    const [tasks, setTasks] = React.useState(initialList);

    const addTask = (title) =>{
        const length = tasks.length
        setTasks([...tasks, {id: length ? tasks[length - 1].id +1: 0, title: title, done: false}])
    }

    return (
        <div className="container">
            <h2 className="title">Render List</h2>
            <ListForm onAdd={addTask} />
            <ul className="list">
                {tasks.length ? tasks.map((item) => (
                    <li 
                        key={item.id} 
                        className={`list-item ${item.done ? 'done' : ''}`}
                    >   
                        <span>id: {item.id}</span> 
                        <span>name: {item.title}</span>

                        <div>
                            <input 
                                type="checkbox" 
                                checked={item.done}
                                className="checkbox"
                                onChange={() => 
                                    setTasks(prev => 
                                        prev.map(task => 
                                            task.id === item.id 
                                                ? { ...task, done: !task.done } 
                                                : task
                                        )
                                    )
                                }
                            />
                            <button 
                                type="button" 
                                className="button"
                                onClick={() => 
                                    setTasks(prev => 
                                        prev.filter(el => el.id !== item.id)
                                    )
                                }
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                )) : <div>У вас нету задач</div>}
            </ul>
        </div>
    );
}
