import reducer from './lunchReducer';
import { addDrink, removeDrink, addSandwich } from '../actions/lunchActions';

describe('lunch reducer', () => {
  it('handles the ADD_DRINK action', () => {
    const initialState = {
      drink: null
    };

    const updatedState = reducer(initialState, addDrink('Old Fashioned'));

    expect(updatedState).toEqual({
      drink: 'Old Fashioned'
    });
  });

  it('handles the REMOVE_DRINK action', () => {
    const initialState = {
      drink: 'Old Fashioned'
    };

    const updatedState = reducer(initialState, removeDrink());

    expect(updatedState).toEqual({
      drink: null
    });
  });

  it('handles the ADD_SANDWICH action', () => {
    const initialState = {
      sandwich: null
    };

    const updatedState = reducer(initialState, addSandwich('vegan'));

    expect(updatedState).toEqual({
      sandwich: 'vegan'
    });
  });
});
