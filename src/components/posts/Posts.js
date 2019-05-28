import React from 'react';
import PropTypes from 'prop-types';

function Posts({ posts }) {
  const postList = posts.map(post => (
    <li key={post.id}>
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })).isRequired
};

export default Posts;
