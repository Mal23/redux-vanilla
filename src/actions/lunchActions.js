export const ADD_DRINK = 'ADD_DRINK';
export const addDrink = drink => ({
  type: 'ADD_DRINK',
  payload: drink
});

export const REMOVE_DRINK = 'REMOVE_DRINK';
export const removeDrink = () => ({
  type: REMOVE_DRINK
});

export const ADD_SANDWICH = 'ADD_SANDWICH';
export const addSandwich = sandwich => ({
  type: ADD_SANDWICH,
  payload: sandwich
});

export const REMOVE_SANDWICH = 'REMOVE_SANDWICH';
export const removeSandwich = () => ({
  type: REMOVE_SANDWICH
});
