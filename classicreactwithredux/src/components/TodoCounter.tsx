import React from 'react'

import './styles/TodoCounter.css'

import {
  ICounterProp
} from '../interfaces'

const TodoCounter: React.FC<ICounterProp> = ({
  todos
}) => {
  return (
    <div className="counter">
      Progress：{todos.filter(todo => todo.finished).length} / {todos.length}
    </div>
  )
}

export default TodoCounter
