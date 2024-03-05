import React from 'react'
import { Link } from 'react-router-dom';
import "./Post.css"

const Post = (post) => {
    const postCard = post.post
    return (
        <div className='post'>
            <div className='img'>
                <img className='postImg' src={postCard.img} alt="" />
            </div>
            <div className='content'>
                <Link to={`/post/${post.id}`}>
                    <h1 className='postTitle'>{postCard.title}</h1>
                </Link>
                <p className='postDesc'>{postCard.desc}</p>
                <button className='postBtn'>Read More</button>
            </div>
        </div>
    )
}

export default Post