import {
  TodoListStore
} from '../store'

/**
 * mobx store 注释
 */
export interface ITodo {
  id: number,
  name: string,
  finished: boolean
}

/**
 * 组件 props 注释
 */
export interface IAppProp {
  todoListStore?: TodoListStore
}

interface IBaseViewProp {
  removeTodoById: (id: number) => void,
  finishTodoById: (id: number) => void
}

export interface IViewListProp extends IBaseViewProp {
  todos: Array<ITodo>
}

export interface IViewProp extends IBaseViewProp {
  todo: ITodo
}

export interface ICounterProp {
  finishedCount: number,
  totalCount: number
}

export interface IAddProp {
  addNewTodo: (name: string) => void
}

export interface IAddState {
  todoVal: string
}
