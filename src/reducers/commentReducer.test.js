import reducer from './commentReducer';
import { createComment } from '../actions/commentActions';

describe('comment reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const newState = reducer({}, createComment(1, 'Bueno'));

    expect(newState).toEqual({
      1: ['Bueno']
    });
  });
});
