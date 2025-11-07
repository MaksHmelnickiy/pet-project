import { Counter } from './components/counter_taskLists';

export const UseStatate = () => {
  return (
    <>
    <div>
      useState и useEffect — это самые базовые хуки в React.
      Они позволяют управлять состоянием и жизненным циклом компонентов.

      <h1>useState</h1>
      {/* useState — это хук, который позволяет добавлять состояние в функциональные компоненты
        Он возвращает массив из двух элементов:
        1. Текущее состояние
        2. Функция для обновления состояния */}
        
        <Counter />
         
      
    </div>
    </>
  );
}