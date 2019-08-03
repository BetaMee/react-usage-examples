export const ADD_TODO = 'ADD_TODO' // 新增 TODO
export const REMOVE_TODO = 'REMOVE_TODO' // 删除 TODO
export const SELECT_TODO = 'SELECT_TODO' // 点击 TODO


// actions
interface AddTodoAction {
  type: typeof ADD_TODO,
  name: string
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO,
  id: number
}

interface SelectTodoAction {
  type: typeof SELECT_TODO,
  id: number
}

export type TodoActionType = AddTodoAction | RemoveTodoAction | SelectTodoAction


// state
export interface ITodo {
  id: number,
  name: string,
  finished: boolean
}

export type TodoReducerType = Array<ITodo>
