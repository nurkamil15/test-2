import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostsThunk, postNext, postPrevious} from "./store/postSlice";

const PostPage = () => {
    const dispatch= useDispatch()
    const {post, current, loading, error} = useSelector(state => state.post)
    console.log( post)
    useEffect(() => {
        dispatch(getPostsThunk())
    }, []);


    const nextPost= () =>{
        dispatch(postNext())
    }
    const previousPost= () =>{
        dispatch(postPrevious())
    }

    if(error){
        return <p>Произошла ошибка {error}</p>
    }
    return (
        <>
            {
                 loading===false && post.length!==0 ?
                    <div>
                        <h1>Id: {post[current].id}</h1>
                        <h2>{post[current].title}</h2>
                        <p>{post[current].body}</p>
                        <button onClick={nextPost}>далее</button>
                        <button onClick={previousPost}>назад</button>
                    </div>
                    :
                    'Загрузка...'
            }
        </>
    );
};

export default PostPage;