import { connect } from 'react-redux'
import {
  Dispatch
} from 'redux'

import TodoViewList from '../components/TodoViewList'

import {
  AppState,
  TodoActionType,

  removeTodo,
  selectTodo
} from '../store/store'

const mapStateToProps = (state: AppState) => ({
  todos: state.todoReducer
})

const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>) => ({
  removeTodoById: (id: number) => dispatch(removeTodo(id)),
  selectTodoById: (id: number) => dispatch(selectTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoViewList)
