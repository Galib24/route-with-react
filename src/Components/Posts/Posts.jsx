import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from '../SInglePosts/Singlepost';
import './Post.css'
const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>All posts are here: {posts.length}</h2>
            <div className='Post'>
                {
                    posts.map(post => <SinglePost key={post.id} post={post}></SinglePost>)
                }
            </div>
        </div>
    );
};

export default Posts;