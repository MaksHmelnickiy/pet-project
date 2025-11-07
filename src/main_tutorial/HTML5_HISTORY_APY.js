/**
 * HTML5 History API — это встроенный API браузера,
 * который позволяет изменять URL в адресной строке без перезагрузки страницы.
 * 
 * Основные методы:
 * - history.pushState(state, title, url) — добавляет новый адрес в историю
 * - history.replaceState(state, title, url) — заменяет текущий адрес
 * - window.onpopstate — событие для кнопок "Назад/Вперёд"
 * 
 * Используется в React Router (BrowserRouter) для создания SPA
 * с красивыми URL без хеша (#) и без перезагрузки страницы.
 */

// Пример использования:
// eslint-disable-next-line no-restricted-globals
history.pushState({}, '', '/tasks'); // Переход на /tasks без перезагрузки

// Отслеживание кнопок "Назад/Вперёд"
window.onpopstate = function(event) {
  console.log('Пользователь нажал Назад или Вперёд', event);
};
