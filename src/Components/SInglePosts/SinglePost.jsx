import React from 'react';
import { Link } from 'react-router-dom';
import './SInglePost.css'
const SinglePost = ({post}) => {
    const {id,title,body} = post;
    return (
        <div className='SinglePost'>
            <h5>ID: {id}</h5>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>SHow Post Details</button>
        </div>
    );
};

export default SinglePost;