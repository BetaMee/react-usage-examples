import React from 'react'
import {
  observer
} from 'mobx-react-lite'

import './styles/TodoCounter.css'

import {
  useTodoStore
} from '../store'

const TodoCounter: React.FC = observer(() => {
  const todoStore = useTodoStore()

  return (
    <div className="counter">
      Progress：{todoStore.finishedTodoCount} / {todoStore.totalCount}
    </div>
  )
})

export default TodoCounter
