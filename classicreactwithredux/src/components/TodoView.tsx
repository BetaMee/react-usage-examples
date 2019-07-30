import React from 'react'

import './styles/TodoView.css'
import {
  IViewProp
} from '../interfaces'

const TodoView: React.FC<IViewProp> = ({ todo, removeTodoById, selectTodoById }) => {
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
