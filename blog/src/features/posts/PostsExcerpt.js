import React from 'react'
import PostAuthor from './PostAuthor'
import ReactionButtons from './ReactionButtons'
import TimeAgo from './TimeAgo'
import { Link } from 'react-router-dom'

const PostsExcerpt = ({post}) => {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 75)}...</p>
      <p>
        <Link to={`post/${post.id}`}>view post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post}/>
    </article>
  )
}

export default PostsExcerpt
