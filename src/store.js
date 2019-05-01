import { createStore, combineReducers } from 'redux';
import { TodoListReducer, SearchFieldReducer } from './components/todoListApp';

const reducers = combineReducers({
  todoList: TodoListReducer,
  searchField: SearchFieldReducer
});

export default createStore(reducers);
