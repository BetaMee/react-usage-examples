import React from 'react'
import {
  IViewProp
} from '../interfaces'

import './styles/TodoView.css'

const TodoView: React.FC<IViewProp> = ({
  todo,
  removeTodoById,
  selectTodoById 
}) => {
  return (
    <div className="view">
      <span
        className={`select ${todo.finished ? 'select_done' : ''}`}
        onClick={() => selectTodoById(todo.id)}
      />
      <span
        className={`text ${todo.finished ? 'text_done' : ''}`}
      >
        {todo.name}
      </span>
      <span
        className="delete"
        onClick={() => removeTodoById(todo.id)}
      />
    </div>
  )
}

export default TodoView
