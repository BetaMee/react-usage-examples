import React from 'react';

import {
  observer,
  inject
} from 'mobx-react'

import TodoAdd from './components/TodoAdd'
import TodoViewList from './components/TodoViewList'
import TodoCounter from './components/TodoCounter'
import './App.css';

import { IAppProp } from './interfaces'

// ! @inject 高阶方法注入会和 Typescript 有冲突，原因在于 TS 会检查外部调用传进来的 props 接口，
// ! 但是 inject 相当于中间注入，避开了检查，这就导致 TS 报错。

const App: React.FC<IAppProp> = inject('todoListStore')(observer(({ todoListStore }) => {
  return (
    <div className="app">
      <div className="app-title">Classic React App ( mobx )</div>
      <TodoAdd
        addNewTodo={todoListStore!.addNewTodo}
      />
      <TodoViewList
        todos={todoListStore!.todos}
        finishTodoById={todoListStore!.finishTodoById}
        removeTodoById={todoListStore!.removeTodoById}
      />
      <TodoCounter
        finishedCount={todoListStore!.finishedTodoCount}
        totalCount={todoListStore!.totalCount}
      />
    </div>
  );
}))

export default App;
