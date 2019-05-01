/**
 * Componente encargado de manejar todo la lógica que se necesite. (manejo de los datos).
 */

import { connect } from 'react-redux';

import SearchField from './searchField';
import { SetValue } from './actions';
import { FilterList } from '../todoList';

const mapStateProps = state => {
  const searchFieldvalue = state && state.searchField && state.searchField.value;

  return {
    value: searchFieldvalue === undefined ? '' : searchFieldvalue
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setValue: e => {
      dispatch(SetValue(e.target.value));
      dispatch(FilterList(e.target.value));
    }
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(SearchField);
