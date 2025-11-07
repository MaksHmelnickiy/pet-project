import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// BrowserRouter — это обёртка для всего твоего React-приложения, 
// которая позволяет работать с маршрутизацией без перезагрузки страницы.

// Краткая таблица по BrowserRouter

//   | Что?            | Зачем?                                          |
//   | --------------- | ----------------------------------------------- |
//   | `BrowserRouter` | Основной роутер для SPA                         |
//   | Использует      | HTML5 History API                               |
//   | Что даёт        | Красивые URL без `#`, переходы без перезагрузки |
//   | Где подключать  | Один раз на корневом уровне                     |
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
