import React, {
  useContext,
  useState,
  FormEvent,
  KeyboardEvent
} from 'react'

import './styles/TodoAdd.css'

import {
  ContextStore
} from '../store/store'

import {
  ADD_TODO
} from '../store/todo'

const TodoAdd: React.FC = () => {
  const {
    dispatch
  } = useContext(ContextStore)

  const [todoVal, setTodoVal] = useState('')

  function handleEnterChange(evt: FormEvent<HTMLInputElement>) {
    setTodoVal(evt.currentTarget.value)
  }
  function handleEnterInput(evt: KeyboardEvent<HTMLInputElement>) {
    // 判断非空
    if (todoVal === '') {
      return
    }
    if (evt.keyCode === 13) {
      // 添加数据
      dispatch({
        type: ADD_TODO,
        name: todoVal
      })
      // 清理输入框
      setTodoVal('')
    }
  }
  return (
    <div>
      <input
        value={todoVal}
        type="text"
        className="add"
        placeholder="Enter to add new todo"
        onChange={handleEnterChange}
        onKeyUp={handleEnterInput}
      />
    </div>
  )
}

export default TodoAdd
