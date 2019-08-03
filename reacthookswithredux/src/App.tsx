import React from 'react';
import './App.css';

import TodoAdd from './components/TodoAdd'
import TodoViewList from './components/TodoViewList'
import TodoCounter from './components/TodoCounter'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-title">React Hooks App ( redux )</div>
      <TodoAdd />
      <TodoViewList />
      <TodoCounter />
    </div>
  );
}

export default App;
