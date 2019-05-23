import { addDrink, ADD_DRINK, addSandwich, ADD_SANDWICH, addChips, ADD_CHIPS, removeDrink, REMOVE_DRINK, removeSandwich, REMOVE_SANDWICH, removeChips, REMOVE_CHIPS } from './lunchActions';

describe('lunch actions', () => {
  it('adds a drink', () => {
    expect(addDrink('Old Fashioned')).toEqual({
      type: ADD_DRINK,
      payload: 'Old Fashioned'
    });
  });

  it('adds a sandwich', () => {
    expect(addSandwich('vegan')).toEqual({
      type: ADD_SANDWICH,
      payload: 'vegan'
    });
  });

  it('adds chips', () => {
    expect(addChips('popchips')).toEqual({
      type: ADD_CHIPS,
      payload: 'popchips'
    });
  });

  it('removes a drink', () => {
    expect(removeDrink()).toEqual({
      type: REMOVE_DRINK
    });
  });

  it('removes a sandwich', () => {
    expect(removeSandwich()).toEqual({
      type: REMOVE_SANDWICH
    });
  });
});
