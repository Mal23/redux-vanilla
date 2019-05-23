import { CREATE_POST, createPost } from './postActions';

describe('post actions', () => {
  it('creates a create post action', () => {
    expect(createPost('My Post', 'Sup?')).toEqual({
      type: CREATE_POST,
      payload: { title: 'My Post', body: 'Sup?' }
    });
  });
});
