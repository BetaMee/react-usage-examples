import React from 'react'

import './styles/TodoCounter.css'

import {
  ICounterProp
} from '../interfaces'

const TodoCounter: React.FC<ICounterProp> = ({
  finishedCount,
  totalCount
}) => {
  return (
    <div className="counter">
      Progress：{finishedCount} / {totalCount}
    </div>
  )
}

export default TodoCounter
