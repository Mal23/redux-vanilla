import reducer from './postReducer';
import { createPost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the CREATE_POST action', () => {
    const newState = reducer([], createPost('My post', 'So entertaining!'));

    expect(newState).toEqual([
      { title: 'My post', body: 'So entertaining!' }
    ]);
  });
});
