import React from 'react'
import { observer } from 'mobx-react'

import TodoView from './TodoView'
import './styles/TodoViewList.css'

import {
  IViewListProp
} from '../interfaces'

@observer
class TodoViewList extends React.Component<IViewListProp, {}> {
  render() {
    const {
      removeTodoById,
      finishTodoById,
      todos
    } = this.props
    return (
      <div className="viewlist">
        {todos.map((item, index) => (
          <TodoView
            todo={item}
            finishTodoById={finishTodoById}
            removeTodoById={removeTodoById}
            key={index}
          />
        ))}
      </div>
    )
  }
}

export default TodoViewList
