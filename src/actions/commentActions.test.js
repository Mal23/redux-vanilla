import { createComment, CREATE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a create comment action', () => {
    expect(createComment(0, 'My Comment')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'My Comment' }
    });
  });
});
