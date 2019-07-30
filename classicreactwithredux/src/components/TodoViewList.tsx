import React from 'react'

import TodoView from './TodoView'
import './styles/TodoViewList.css'

import {
  IViewListProp
} from '../interfaces'

const TodoViewList: React.FC<IViewListProp> = ({
  todos,
  selectTodoById,
  removeTodoById
}) => (
  <div className="viewlist">
    {todos.map((item, index) => (
      <TodoView
        todo={item}
        selectTodoById={selectTodoById}
        removeTodoById={removeTodoById}
        key={index}
      />
    ))}
  </div>
)

export default TodoViewList
