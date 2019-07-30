import React from 'react';

import {
  observer
} from 'mobx-react'

import TodoAdd from './components/TodoAdd'
import TodoViewList from './components/TodoViewList'
import TodoCounter from './components/TodoCounter'
import './App.css';

import { IAppProp } from './interfaces'

const App: React.FC<IAppProp> = observer(({ store }) => {
  return (
    <div className="app">
      <div className="app-title">Classic React App ( mobx )</div>
      <TodoAdd
        addNewTodo={store.addNewTodo}
      />
      <TodoViewList
        todos={store.todos}
        finishTodoById={store.finishTodoById}
        removeTodoById={store.removeTodoById}
      />
      <TodoCounter
        finishedCount={store.finishedTodoCount}
        totalCount={store.totalCount}
      />
    </div>
  );
})

export default App;
