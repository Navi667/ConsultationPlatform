import React from 'react';
import "./OtherPosts.css"

const OtherPosts = (post) => {
    const postInfo = post.post;

    return (
        <div className='menuPost'>
            <img className='menuBgc' src={postInfo.img} alt=''></img>
            <h2 className='menuPostTitle'>{postInfo.title}</h2>
            <button className='menuPostBtn'>Read More</button>
        </div>
    )
}

export default OtherPosts