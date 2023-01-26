import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, errorComents] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);
  return (
    <div>
      <h1>Вы открыли страницу поста {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}.{post.title}
        </div>
      )}
      <h1>Комментарии</h1>
      {isCommentsLoading ? (
        <Loader />
      ) : (
        comments.map((post) => {
          return (
            <div key={post.id}>
              <h3>Имя: {post.name}</h3>
              <address>E-mail: {post.email}</address>
              <p>{post.body}</p>
              <hr />
            </div>
          );
        })
      )}
    </div>
  );
};

export default PostIdPage;
