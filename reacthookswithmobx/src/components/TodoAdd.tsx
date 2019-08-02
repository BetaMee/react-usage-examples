import React,{
  KeyboardEvent,
  FormEvent,
  useState
} from 'react'

import './styles/TodoAdd.css'

import {
  observer
} from 'mobx-react-lite'

import {
  useTodoStore
} from '../store'

interface IAddState {
  todoVal: string
}

const TodoAdd: React.FC = observer(() => {
  const [todoVal, setTodoVal] = useState('')
  const todoStore = useTodoStore()

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
      todoStore.addNewTodo(todoVal)
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
})

export default TodoAdd
