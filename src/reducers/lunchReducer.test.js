import reducer from './lunchReducer';
import { addDrink } from '../actions/lunchActions';

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
});
