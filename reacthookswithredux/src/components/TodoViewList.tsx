import React, {
  useContext
} from 'react'

import TodoView from './TodoView'

import {
  ContextStore
} from '../store/store'

import {
  SELECT_TODO,
  REMOVE_TODO
} from '../store/todo'

import './styles/TodoViewList.css'

const TodoViewList: React.FC = () => {
  const {
    todoState,
    dispatch
  } = useContext(ContextStore)
  // 发起 action 操作
  const selectTodoById = (id: number) => dispatch({
    type: SELECT_TODO,
    id
  })

  const removeTodoById = (id: number) => dispatch({
    type: REMOVE_TODO,
    id
  })

  return (
    <div className="viewlist">
      {todoState.map((item, index) => (
        <TodoView
          todo={item}
          selectTodoById={selectTodoById}
          removeTodoById={removeTodoById}
          key={index}
        />
      ))}
    </div>
  )
}

export default TodoViewList
