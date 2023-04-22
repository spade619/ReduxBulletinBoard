import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:'0', name: 'john doe'},
    {id:'1', name: 'jane donovan'},
    {id:'2', name: 'alnil uie'},
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer