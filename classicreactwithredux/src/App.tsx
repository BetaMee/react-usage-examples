import React from 'react';
import './App.css';

import TodoAdd from './containers/TodoAddContainer'
import TodoViewList from './containers/TodoViewListContainer'
import TodoCounter from './containers/TodoCounterContainer'

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app-title">Classic React App ( redux )</div>
      <TodoAdd />
      <TodoViewList />
      <TodoCounter />
    </div>
  );
}

export default App;
