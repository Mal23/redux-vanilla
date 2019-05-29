import { CREATE_POST, createPost, DELETE_POST, deletePost } from './postActions';

describe('post actions', () => {
  it('creates a create post action', () => {
    expect(createPost('My Post', 'Sup?')).toEqual({
      type: CREATE_POST,
      payload: { title: 'My Post', body: 'Sup?' }
    });
  });
  it('creates a delete post action', () => {
    expect(deletePost(0)).toEqual({
      type: DELETE_POST,
      payload: 0
    });
  });
});
