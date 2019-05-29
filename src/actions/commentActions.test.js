import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('comment actions', () => {
  it('creates a create comment action', () => {
    expect(createComment(0, 'My Comment')).toEqual({
      type: CREATE_COMMENT,
      payload: { postId: 0, comment: 'My Comment' }
    });
  });

  it('creates a delete comment action', () => {
    expect(deleteComment(0, 1)).toEqual({
      type: DELETE_COMMENT,
      payload: { postId: 0, commentId: 1 }
    });
  });
});
