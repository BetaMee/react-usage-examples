import todolist from '../store/todolist'
import {
  ITodo
} from './todo'

export interface IAppProp {
  store: todolist
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
