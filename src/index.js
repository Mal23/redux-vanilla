import { createStore } from 'redux';
import { ADD_DRINK, ADD_SANDWICH, ADD_CHIPS, REMOVE_DRINK, REMOVE_SANDWICH, REMOVE_CHIPS } from './actions/lunchActions';

const initialState = {
  drink: null,
  sandwich: null,
  chips: null
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_DRINK:
      return { ...state, drink: action.payload };
    case ADD_SANDWICH:
      return { ...state, sandwich: action.payload };
    case ADD_CHIPS:
      return { ...state, chips: action.payload };
    case REMOVE_DRINK:
      return { ...state, drink: null };
    case REMOVE_SANDWICH:
      return { ...state, sandwich: null };
    case REMOVE_CHIPS:
      return { ...state, chips: null };
    default:
      return state;
  }
}

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
