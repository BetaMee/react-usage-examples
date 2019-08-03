import React, {
  useContext
} from 'react'

import './styles/TodoCounter.css'

import {
  ContextStore
} from '../store/store'

const TodoCounter: React.FC = () => {
  const {
    todoState,
  } = useContext(ContextStore)

  return (
    <div className="counter">
      Progress：{todoState.filter(todo => todo.finished).length} / {todoState.length}
    </div>
  )
}

export default TodoCounter
