import React from 'react'

import { observer } from 'mobx-react-lite'

import './styles/TodoView.css'
import {
  IViewProp
} from '../interfaces'

const TodoView: React.FC<IViewProp> = observer(({ todo, removeTodoById, finishTodoById }) => {
  return (
    <div className="view">
      <span
        className={`select ${todo.finished ? 'select_done' : ''}`}
        onClick={() => finishTodoById(todo.id)}
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
})

export default TodoView
