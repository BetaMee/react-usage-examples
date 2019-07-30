import { connect } from 'react-redux'
import {
  Dispatch
} from 'redux'
import TodoAdd from '../components/TodoAdd'

import {
  // action
  addTodo,
  TodoActionType,
  // state
  TodoReducerType
} from '../store/todo'


const mapStateToProps = (state: TodoReducerType) => ({
  // 
})

const mapDispatchToProps = (dispatch: Dispatch<TodoActionType>) => ({
  addNewTodo: (name: string) => dispatch(addTodo(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoAdd)

