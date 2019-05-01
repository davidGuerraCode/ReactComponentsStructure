import { connect } from 'react-redux';

import TodoList from './todoList';

const mapStateProps = state => {
  const getFilteredItems = state && state.todoList && state.todoList.filteredItems;

  return {
    listItems: getFilteredItems === undefined ? [] : getFilteredItems
  };
};

export default connect(mapStateProps)(TodoList);
