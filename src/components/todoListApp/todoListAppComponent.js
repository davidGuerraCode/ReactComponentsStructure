/**
 * Archivo que contiene todo la aplicación. (<App />)
 */

import React from 'react';
import { Provider } from 'react-redux';

import { TodoList } from './components/todoList';
import { SearchField } from './components/searchField';

const TodoListApp = () => {
  return (
    <div>
      <TodoList />
      <SearchField />
    </div>
  );
};

export default TodoListApp;
