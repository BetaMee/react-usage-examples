import {
  observable,
  computed,
  action
} from 'mobx'

import {
  ITodo
} from '../interfaces'

class Todo {
  id = Math.random();
  @observable name: string;
  @observable finished = false;
  constructor(name: string) {
    this.name = name;
  }
}

class TodoListStore {
  @observable todos: Array<ITodo> = []
  @computed get finishedTodoCount() {
    return this.todos.filter(todo => todo.finished).length
  }
  @computed get totalCount() {
    return this.todos.length
  }
  @action
  public finishTodoById = (id: number) => {
    this.todos.forEach(todo => {
      if (todo.id === id) {
        todo.finished = !todo.finished
      }
    })
  }
  @action
  public addNewTodo = (name: string) => {
    this.todos.push(new Todo(name))
  }
  @action
  public removeTodoById = (id: number) => {
    // 找到某一项的位置
    const index = this.todos.findIndex(todo => todo.id === id)
    this.todos.splice(index, 1)
  }
}

export default TodoListStore
