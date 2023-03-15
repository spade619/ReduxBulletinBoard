import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'learn redux toolkit', content: 'murage nindot lage ni' },
    {id: '2', title: 'slices', content: 'nindut gyud diay hhaaaha' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{}
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer 