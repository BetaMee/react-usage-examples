import {
  createStore,
  combineReducers
} from 'redux';

import { todoReducer } from './todo/';

// 根 rootReducer
const rootReducer = combineReducers({
  todoReducer: todoReducer
})

// 导出store 类型
export type AppState = ReturnType<typeof rootReducer>

const configureStore = () => {
  // 组合中间件
  // const middlewares = [thunkMiddleware];
  // const middleWareEnhancer = applyMiddleware(...middlewares);
  // 创建 store
  const store = createStore(rootReducer);
  return store;
}

export default configureStore

export * from './todo'
