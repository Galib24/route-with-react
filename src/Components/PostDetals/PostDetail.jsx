import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
   const {id,title, useId,body} = post;

   const navigate = useNavigate();

   const handleGoBack =  () =>{
navigate(-1);
   }
    return (
        <div>
            <h3>details about post of: {id}</h3>
            <h5>{title}</h5>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetail;