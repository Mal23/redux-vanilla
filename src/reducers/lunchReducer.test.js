import reducer from './lunchReducer';
import { addDrink, removeDrink, addSandwich, removeSandwich, addChips, removeChips } from '../actions/lunchActions';

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

  it('handles the REMOVE_SANDWICH action', () => {
    const initialState = {
      sandwich: 'vegan'
    };

    const updatedState = reducer(initialState, removeSandwich());

    expect(updatedState).toEqual({
      sandwich: null
    });
  });

  it('handles the ADD_CHIPS action', () => {
    const initialState = {
      chips: null
    };

    const updatedState = reducer(initialState, addChips('popchips'));

    expect(updatedState).toEqual({
      chips: 'popchips'
    });
  });

  it('handles the REMOVE_CHIPS action', () => {
    const initialState = {
      chips: 'popchips'
    };

    const updatedState = reducer(initialState, removeChips());
    
    expect(updatedState).toEqual({
      chips: null
    });
  });
});
