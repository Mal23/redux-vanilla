import { createStore } from 'redux';
import reducer from './reducers/lunchReducer';

const store = createStore(reducer);

store.dispatch({
  type: 'ADD_DRINK',
  payload: 'Old Fashioned'
});

console.log('added drink', store.getState());

store.dispatch({
  type: 'ADD_SANDWICH',
  payload: 'vegan'
});

console.log('added sandwich', store.getState());

store.dispatch({
  type: 'ADD_CHIPS',
  payload: 'popchips'
});

console.log('added chips', store.getState());

store.dispatch({
  type: 'REMOVE_DRINK',
  payload: 'Old Fashioned'
});

console.log('remove drink', store.getState());

store.dispatch({
  type: 'REMOVE_SANDWICH',
  payload: 'vegan'
});

console.log('remove sandwich', store.getState());

store.dispatch({
  type: 'REMOVE_CHIPS',
  payload: 'popchips'
});

console.log('remove chips', store.getState());
