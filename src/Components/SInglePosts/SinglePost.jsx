import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SInglePost.css'
const SinglePost = ({post}) => {
    const {id,title,body} = post;
    const navigate = useNavigate();

    const handleNavigation = () =>{
        navigate(`/post/${id}`);

    }
    return (
        <div className='SinglePost'>
            <h5>ID: {id}</h5>
            <h4>Title: {title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>SHow Post Details</button></Link>
         <button onClick={handleNavigation}>With button handler</button>
        </div>
    );
};

export default SinglePost;