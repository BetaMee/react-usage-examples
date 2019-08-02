export interface ITodo {
  id: number,
  name: string,
  finished: boolean
}

// export interface IAppProp {
//   // todoListStore?: TodoListStore
// }

interface IBaseViewProp {
  removeTodoById: (id: number) => void,
  finishTodoById: (id: number) => void
}

// export interface IViewListProp {
//   // todos: Array<ITodo>
// }

export interface IViewProp extends IBaseViewProp {
  todo: ITodo
}

// export interface ICounterProp {
//   finishedCount: number,
//   totalCount: number
// }

export interface IAddProp {
  addNewTodo: (name: string) => void
}
