import reducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

describe('post reducer', () => {
  it('handles the CREATE_POST action', () => {
    const newState = reducer([], createPost('My post', 'So entertaining!'));

    expect(newState).toEqual([
      { title: 'My post', body: 'So entertaining!' }
    ]);
  });

  it('handles the DELETE_POST action', () => {
    const initialState = [
      { title: 'My post', body: 'So entertaining!' },
      { title: 'Another post', body: 'Informative' }
    ];
    const newState = reducer(initialState, deletePost(1));

    expect(newState).toEqual([
      { title: 'My post', body: 'So entertaining!' }
    ]);
  });
});
