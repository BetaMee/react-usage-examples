import {
  ITodo,
  addTodo,
  removeTodo,
  selectTodo
} from '../store/todo'

export interface IAddProp {
  addNewTodo: typeof addTodo
}

export interface IAddState {
  todoVal: string
}

interface IBaseViewProp {
  removeTodoById: typeof removeTodo,
  selectTodoById: typeof selectTodo
}

export interface IViewListProp extends IBaseViewProp {
  todos: Array<ITodo>
}

export interface IViewProp extends IBaseViewProp {
  todo: ITodo
}

export interface ICounterProp {
  todos: Array<ITodo>
}
