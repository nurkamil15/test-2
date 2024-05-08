import {configureStore} from "@reduxjs/toolkit";
import {postReduce} from "./postSlice";


export const store = configureStore(
    {
        reducer:{
            post:postReduce
        }
    }
)