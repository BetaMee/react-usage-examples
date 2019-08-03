import React from 'react'

import {
  TodoReducerType,
  TodoActionType,

  initalTodoState,
  todoReducer
} from './todo'

type combineDispatchsType = React.Dispatch<TodoActionType>

// 将所有的 dispatch 组合
const combineDispatchs = (dispatchs: Array<combineDispatchsType>) => (obj: TodoActionType) => {
  for (let i = 0;  i < dispatchs.length; i++) {
    dispatchs[i](obj)
  }
}

// 根组件状态
const AppState = {
  todoState: [] as TodoReducerType,
  dispatch: {} as ReturnType<typeof combineDispatchs>
}

// Context
export const ContextStore = React.createContext(AppState)

const HookContextProvider: React.FC = ({ children }) => {

  const [todoState, todoDispatch] = React.useReducer(
    todoReducer,
    initalTodoState
  )

  return (
    <ContextStore.Provider
      value={{
        todoState,
        dispatch: combineDispatchs([
          todoDispatch
        ])
      }}
    >
      {children}
    </ContextStore.Provider>
  )
}

export default HookContextProvider
