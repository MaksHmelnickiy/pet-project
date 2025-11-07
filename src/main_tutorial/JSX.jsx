import React from 'react';

export const JSX = () => {
  return (
    <div>
      <h1 className='JSX'>JSX</h1>
      {/* То же самое можно написать без JSX, используя чистый React.createElement(тип, пропсы, дети): */}
        {React.createElement('h1', { className: 'JSX'})}
        {/* Объяснение:
        JSX — это синтаксический сахар
        React.createElement(тип, пропсы, дети) — "чистый" способ создать элемент вручную 
        */}
    </div>
  );
}