import React,{
  KeyboardEvent,
  FormEvent
} from 'react'

import './styles/TodoAdd.css'

import {
  IAddProp
} from '../interfaces'

interface IAddState {
  todoVal: string
}

class TodoAdd extends React.Component<IAddProp, IAddState> {
  state = {
    todoVal: ''
  }
  public handleEnterChange = (evt: FormEvent<HTMLInputElement>) => {
    this.setState({
      todoVal: evt.currentTarget.value
    })
  }
  public handleEnterInput = (evt: KeyboardEvent<HTMLInputElement>) => {
    const {
      addNewTodo
    } = this.props
    const {
      todoVal
    } = this.state
    // 判断非空
    if (todoVal === '') {
      return
    }
    if (evt.keyCode === 13) {
      // 添加数据
      addNewTodo(todoVal)
      // 清理输入框
      this.setState({
        todoVal: ''
      })
    }
  }
  render() {
    const {
      todoVal
    } = this.state
    return (
      <div>
        <input
          value={todoVal}
          type="text"
          className="add"
          placeholder="Enter to add new todo"
          onChange={this.handleEnterChange}
          onKeyUp={this.handleEnterInput}
        />
      </div>
    )
  }
}

export default TodoAdd
