import React, { useState, useCallback } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  }, []);

  const handleAddTask = useCallback(() => {
    if (taskInput.trim() === "") return; // Не добавляем пустые задачи
    setTasks(prevTasks => [...prevTasks, taskInput]);
    setTaskInput("");
  }, [taskInput]);

  const handleDeleteTask = useCallback((taskIndexToDelete) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== taskIndexToDelete));
  }, []);

  return (
    <>
      <div>
        <h2>Counter</h2>
        <button onClick={handleIncrement}>+1</button>
        <div>Result: {count}</div>
        <button onClick={handleDecrement}>-1</button>
        <hr />
      </div>

      <div>
        <h2>Tasks List</h2>
        <input
          type="text"
          onChange={(e) => setTaskInput(e.target.value)}
          value={taskInput}
          placeholder="Введите задачу"
        />
        <button onClick={handleAddTask}>Добавить задачу</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}{" "}
              <button onClick={() => handleDeleteTask(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
