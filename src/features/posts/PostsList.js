import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPosts} from './postsSlice'
import './posts.css'

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article className="posts" key ={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content.substring(0, 100)}</p>
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