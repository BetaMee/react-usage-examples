import {
  TodoReducerType,
  TodoActionType
} from './types'

import {
  ADD_TODO,
  REMOVE_TODO,
  SELECT_TODO
} from './types'

// 初始化状态
const initalState: TodoReducerType = []

export const todoReducer = (state = initalState, action: TodoActionType): TodoReducerType => {
  switch(action.type)  {
    case ADD_TODO:
      return [...state, {
        id: Math.random(),
        name: action.name,
        finished: false
      }]

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.id)

    case SELECT_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            finished: !todo.finished
          }
        } else {
          return todo
        }
      })
    default:
      return state;
  }
}
