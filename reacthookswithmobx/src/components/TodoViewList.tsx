import React from 'react'

import {
  observer
} from 'mobx-react-lite'

import TodoView from './TodoView'
import './styles/TodoViewList.css'

import {
  useTodoStore
} from '../store'

const TodoViewList: React.FC = observer(() => {
  const todoStore = useTodoStore()
  return (
    <div className="viewlist">
      {todoStore.todos.map((item, index) => (
        <TodoView
          todo={item}
          finishTodoById={todoStore.finishTodoById}
          removeTodoById={todoStore.removeTodoById}
          key={index}
        />
      ))}
    </div>
  )
})

export default TodoViewList
