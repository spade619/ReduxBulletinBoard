import {createSlice} from '@reduxjs/toolkit'
import {sub} from 'date-fns'
import {nanoid} from 'nanoid'

const initialState = [
    {id: '1', title: 'learn redux toolkit', content: 'murage nindot lage ni', date:sub(new Date(), {minutes: 10}).toISOString()},
    {id: '2', title: 'slices', content: 'nindut gyud diay hhaaaha', date:sub(new Date(), {minutes: 7}).toISOString()}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        postAdded(state, action) {
            state.push(action.payload)
        },
        prepare(title, content, userId){
            return{
                payload:{
                    id: nanoid(),
                    title,
                    content,
                    date: new Date().toISOString(),
                    userId
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer  