import React from 'react';
import './App.css';

import TodoAdd from './components/TodoAdd'
import TodoViewList from './components/TodoViewList'
import TodoCounter from './components/TodoCounter'

import {
  TodoStoreProvider
} from './store'

const App: React.FC = () => {
  return (
    <TodoStoreProvider>
      <div className="app">
        <div className="app-title">React Hooks App ( mobx )</div>
        <TodoAdd />
        <TodoViewList />
        <TodoCounter />
      </div>
    </TodoStoreProvider>
  );
}

export default App;
