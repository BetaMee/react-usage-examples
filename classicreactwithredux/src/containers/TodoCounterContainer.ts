import { connect } from 'react-redux'
import {
  Dispatch
} from 'redux'

import {
  TodoActionType,
  AppState
} from '../store/store'


import TodoCounter from '../components/TodoCounter'

const mapStateToProps = (state: AppState) => ({
  todos: state.todoReducer
})

const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>) => ({
  // 
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoCounter)

