import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import { Provider } from 'react-redux';
import { TodoListApp } from './components/todoListApp';

ReactDOM.render(
  <Provider store={store}>
    <TodoListApp />
  </Provider>,
  document.getElementById('app')
);
