import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  TodoListStore
} from './store'
import * as serviceWorker from './serviceWorker';

import {
  Provider
} from 'mobx-react'

// 状态
const rootStore = {
  todoListStore: new TodoListStore()
} 

// 通过 Provider/inject 来注入，react 16.8 + 可以使用 hooks + context 来注入
ReactDOM.render(
  <Provider {...rootStore} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
