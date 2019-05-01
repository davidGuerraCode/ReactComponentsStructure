const FILTER_LIST = 'todoList.filterList';

const FilterList = val => {
  return {
    type: FILTER_LIST,
    val
  };
};

export { FILTER_LIST, FilterList };
