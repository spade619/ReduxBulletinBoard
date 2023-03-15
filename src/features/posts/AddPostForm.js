import React, { useState } from 'react'
import './posts.css'

const AddPostForm = () => {
        const [title, setTitle] = useState('')
        const [content, setContent] = useState('')

        const onTitleChanged = e => setTitle(e.target.value)
        const onContentChanged = e => setContent(e.target.value)
  return (
    <section className='sections'>
        <h2>Add a New Post</h2>
        <form id='postForm'>
            <label htmlFor='postTitle'> Post Title:</label>
            <input type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}

            />
            <label htmlFor='postContent'> Content:</label>
            <textarea 
            id='postContent'
            name='postContent'
            value={content}
            onChange={onContentChanged}
            />
            <button type='button'>Save</button>

         
        </form>
    </section>
  )
}

export default AddPostForm