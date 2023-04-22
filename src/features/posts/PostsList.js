import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from './postsSlice'
import './posts.css'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    console.log('this is the posts log', posts)
    const renderedPosts = posts.map(post => (
        <article className="posts" key ={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
              
                <h5><PostAuthor userId={post.userId}/></h5>
                <h5><TimeAgo timestamp={post.date}/></h5>
        </article>
    ))

   
  return (
    <section className='sections'>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList