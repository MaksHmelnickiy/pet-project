import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Header } from './header';
import { AppRoutes } from './AppRoutes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
