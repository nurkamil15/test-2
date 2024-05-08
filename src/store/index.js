import {configureStore} from "@reduxjs/toolkit";
import {postReduce} from "./postsSlice";


export const store = configureStore(
    {
        reducer:{
            post:postReduce
        }
    }
)