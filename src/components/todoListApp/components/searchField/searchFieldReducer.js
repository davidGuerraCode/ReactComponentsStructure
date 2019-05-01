import { SET_VALUE } from './actions';

const initState = {
  value: ''
};

const reducer = (state = initState, action) => {
  const getTypePropertie = action && action.type;
  const getValPropertie = action && action.val;

  const type = getTypePropertie === undefined ? '' : getTypePropertie;
  const val = getValPropertie === undefined ? '' : getValPropertie;

  switch (type) {
    case SET_VALUE:
      return Object.assign({}, state, { value: val });
    // return { ...state, value: val };

    default:
      return state;
  }
};

export default reducer;
