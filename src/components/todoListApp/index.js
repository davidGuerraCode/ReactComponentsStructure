/**
 * Punto de entrada de la aplicación
 */

import { TodoListReducer } from './components/todoList';
import { SearchFieldReducer } from './components/searchField';
import TodoListApp from './todoListAppComponent';

// Se exponen los componentes necesarios
export { TodoListReducer, SearchFieldReducer, TodoListApp };
