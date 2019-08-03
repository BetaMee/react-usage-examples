import {
  ITodo,
  removeTodo,
  selectTodo
} from '../store/todo'


interface IBaseViewProp {
  removeTodoById: (id: number) => void,
  selectTodoById: (id: number) => void
}


export interface IViewProp extends IBaseViewProp {
  todo: ITodo
}
