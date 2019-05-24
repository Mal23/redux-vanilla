import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const newState = reducer({}, createComment(1, 'Bueno'));

    expect(newState).toEqual({
      1: ['Bueno']
    });
  });

  it('handles the CREATE_COMMENT action with existing comments', () => {
    const initialState = {
      1: ['hola']
    };
    const newState = reducer(initialState, createComment(1, 'Bueno'));

    expect(newState).toEqual({
      1: ['hola', 'Bueno']
    });
  });

  it('handles the DELETE_COMMENT action', () => {
    const initialState = {
      1: ['hola', 'Bueno']
    };
    const newState = reducer(initialState, deleteComment(1, 0));

    expect(newState).toEqual({
      1: ['Bueno']
    });
  });
});
