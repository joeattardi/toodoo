import {
  ADD_TODO_LIST,
  UPDATE_TODO_LIST,
  DELETE_TODO_LIST,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  LOAD_TODOS
} from './actions';

export const todos = function todos(state = [], action) {
  switch (action.type) {
    case LOAD_TODOS:
      return action.payload;
    case ADD_TODO_LIST:
      return state.concat(action.payload);
    case UPDATE_TODO_LIST:
      const index = state.indexOf(action.payload);
      return [
        ...state.slice(0, index),
        action.payload,
        ...state.slice(index + 1)
      ];
    case DELETE_TODO_LIST:
      return state.filter(todoList => todoList.id !== action.payload);
    default:
      return state;
  }
}
