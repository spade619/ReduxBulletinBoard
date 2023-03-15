import {createSlice} from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'learn redux toolkit', content: 'murage nindot lage ni' },
    {id: '2', title: 'slices', content: 'nindut gyud diay hhaaaha' }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer 