import { FILTER_LIST } from './actions.js';
import { filterItems } from './filters';

const mockData = ['foo', 'bar', 'baz'];

const initState = {
  listItems: mockData,
  filteredItems: mockData
};

const reducer = (state = initState, action) => {
  const getType = action && action.type;
  const getVal = action && action.val;

  const type = getType === undefined ? '' : getType;
  const val = getVal === undefined ? '' : getVal;

  switch (type) {
    case FILTER_LIST:
      const getItems = state && state.listItems;
      const items = getItems === undefined ? [] : getItems;

      return Object.assign({}, state, { filteredItems: filterItems(items, val) });

    default:
      return state;
  }
};

export default reducer;
