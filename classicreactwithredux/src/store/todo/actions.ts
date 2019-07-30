import {
  ADD_TODO,
  REMOVE_TODO,
  SELECT_TODO
} from './types'

import {
  TodoActionType
} from './types'

export const addTodo = (name: string): TodoActionType => ({
  type: ADD_TODO,
  name: name
})

export const removeTodo = (id: number): TodoActionType => ({
  type: REMOVE_TODO,
  id: id
})

export const selectTodo = (id: number): TodoActionType => ({
  type: SELECT_TODO,
  id: id
})
