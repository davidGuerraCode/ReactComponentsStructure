const SET_VALUE = 'searchField.setValue';

const SetValue = val => {
  return {
    type: SET_VALUE,
    val
  };
};

export { SET_VALUE, SetValue };
