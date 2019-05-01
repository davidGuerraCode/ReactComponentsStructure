import React from 'react';

import { TodoListItem } from './components/todoListItem';

const TodoList = ({ listItems }) => {
  const temp = Array.isArray(listItems) ? listItems : [];

  return (
    <ul>
      {temp.map((item, index) => {
        return <TodoListItem key={index}>{item}</TodoListItem>;
      })}
    </ul>
  );
};

export default TodoList;
