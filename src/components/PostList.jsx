import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Postitem from './Postitem';

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!!!</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} classNames="post" timeout={500}>
              <Postitem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default PostList;
