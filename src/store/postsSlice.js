import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsThunk=createAsyncThunk('post/fetchPostsThunk', async () =>{
        const response= await axios.get('https://dummyjson.com/posts')
        return response.data.posts
    }
)

const postsSlice= createSlice(
    {
        name:'post',
        initialState:{
            post:[],
            loading:false,
            error:null,
            current:0
        },
        reducers:{
            postNext:(state) =>{
                state.current++
                if(state.current>29){
                    state.current=0
                }
            },
            postPrevious:(state) =>{
                state.current--
                if(state.current<0){
                    state.current=29
                }
            }
        },
        extraReducers:(builder) =>{
            builder
                .addCase(fetchPostsThunk.fulfilled, (state, action) =>{
                    state.loading=false
                    state.error=null
                    state.post=action.payload
                })
                .addCase(fetchPostsThunk.pending, (state) =>{
                        state.loading=true
                })
                .addCase(fetchPostsThunk.rejected, (state, action) =>{
                    state.error= action.error.message
                    state.loading=false
                })
                }

    }
)
export const postReduce= postsSlice.reducer
export const {postNext,postPrevious}= postsSlice.actions