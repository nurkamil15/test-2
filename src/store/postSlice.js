import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPostsThunk=createAsyncThunk(
    'post/getPostsThunk',
    async () =>{
        const response= await axios.get('https://dummyjson.com/posts')
        return response.data.posts
    }
)
const state={
    post:[],
    loading:false,
    error:null,
    current:0
}

const postSlice= createSlice(
    {
        name:'post',
        initialState:state,
        reducers:{
            postNext:(state, action) =>{
                state.current++
                if(state.current>state.post.length-1){
                    state.current=0
                }
            },
            postPrevious:(state, action) =>{
                state.current--
                if(state.current<0){
                    state.current=state.post.length-1
                }
            }
        },
        extraReducers:(builder) =>{
            builder
                .addCase(getPostsThunk.fulfilled, (state, action) =>{
                    state.loading=false
                    state.error=null
                    state.post=action.payload
                })
                .addCase(getPostsThunk.pending, (state) =>{
                        state.loading=true
                })
                .addCase(getPostsThunk.rejected, (state, action) =>{
                    state.error= action.error.message
                    state.loading=false
                })
                }

    }
)
export const postReduce= postSlice.reducer
export const {postNext,postPrevious}= postSlice.actions