import React, {
  useContext
} from 'react'

import {
  useLocalStore
} from 'mobx-react-lite'

import {
  observable
} from 'mobx'

import {
  ITodo
} from '../interfaces'

// 定义 store shape
const createStore = () => ({
  todos: [] as ITodo[], // 或者 Array<ITodo>
  get finishedTodoCount() {
    return this.todos.filter(todo => todo.finished).length
  },
  get totalCount() {
    return this.todos.length
  },
  finishTodoById(id: number) {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished
      }
    })
  },
  addNewTodo(name: string) {
    // *新增 observable Todo 对象
    this.todos.push(observable({
      id: Math.random(),
      name: name,
      finished: false
    }))
  },
  removeTodoById(id: number) {
    // 找到某一项的位置
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }
})

type TTodoStore = ReturnType<typeof createStore>


// 创建 context
const TodoStoreContext = React.createContext<TTodoStore | null>(null)

// 创建 Provider，通过 React.Context 来注入
const TodoStoreProvider: React.FC = ({ children }) => {
  const store = useLocalStore(createStore)
  return (
    <TodoStoreContext.Provider value={store}>
      {children}
    </TodoStoreContext.Provider>
  )
}

// 创建 Hook
const useTodoStore = () => {
  const store = useContext(TodoStoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export {
  TodoStoreProvider,
  useTodoStore
}
